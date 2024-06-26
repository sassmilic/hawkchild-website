import React from "react";
import ImageGridMobile from "../components/ImageGrid/ImageGridMobile";
import "./HomeMobile.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

function Home() {
  return (
    <>
      <div className="home-container-mobile">
        <div className="viewport">
          <div className="title-text-mobile diy-svg">
            <img src={DiyText} alt="DIY" />
          </div>
          <ImageGridMobile />
          <div className="title-text-mobile hawk-svg">
            <img src={HawkText} alt="HAWK" />
          </div>
          <div className="title-text-mobile child-svg">
            <img src={ChildText} alt="CHILD" />
          </div>
        </div>
      </div>
      {/*<SimpleFooter />*/}
    </>
  );
}

export default Home;
