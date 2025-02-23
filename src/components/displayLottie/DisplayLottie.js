import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const {animationData, width, height} = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <div style={{width: width || "100%", height: height || "100%"}}>
          <Lottie
            animationData={defaultOptions.animationData}
            loop={defaultOptions.loop}
            style={{width: "100%", height: "100%"}}
          />
        </div>
      </Suspense>
    );
  }
}
