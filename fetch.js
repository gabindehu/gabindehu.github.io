const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;

const ERR = {
  noUserName: "Github Username is undefined. Please set the GITHUB_USERNAME variable in your .env file.",
  requestFailed: "The request to GitHub failed. Check your GitHub token in the .env file."
};

// Vérification des variables d'environnement
if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    console.error(ERR.noUserName);
    process.exit(1);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const query = JSON.stringify({
    query: `
    {
      user(login: "${GITHUB_USERNAME}") { 
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers { totalCount }
                url
                id
                diskUsage
                primaryLanguage { name color }
              }
            }
          }
        }
      }
    }
    `
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node",
      "Content-Type": "application/json"
    }
  };

  const req = https.request(options, res => {
    let data = "";

    console.log(`GitHub API Response: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.error(ERR.requestFailed);
      process.exit(1);
    }

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const jsonData = JSON.parse(data); // Vérifier que la réponse est bien un JSON valide
        fs.writeFile("./public/profile.json", JSON.stringify(jsonData, null, 2), err => {
          if (err) {
            console.error("Error saving profile.json:", err);
          } else {
            console.log("Profile data saved to public/profile.json");
          }
        });
      } catch (err) {
        console.error("Error parsing GitHub response:", err);
      }
    });
  });

  req.on("error", error => {
    console.error("Request error:", error);
  });

  req.write(query);
  req.end();
}
