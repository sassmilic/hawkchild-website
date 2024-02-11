import React from 'react';
import TitleAndMarquee from '../components/TitleAndMarquee/TitleAndMarquee';
import ContentLayer from '../components/ContentLayer';
import './Home3.css';

import DiyText from '../assets/title_text_diy.svg';
import HawkText from '../assets/title_text_hawk.svg';
import ChildText from '../assets/title_text_child.svg';


function Home2() {
  const layer1Ref = React.useRef(null);
  const layer2Ref = React.useRef(null);
  const layer3Ref = React.useRef(null);

 function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

    const images1 = importAll(require.context('../assets/collage/posters', false, /\.(png|jpe?g|svg|mp4)$/));
    const images2 = importAll(require.context('../assets/collage/layer2', false, /\.(png|jpe?g|svg|mp4)$/));
    const images3 = importAll(require.context('../assets/collage/videos', false, /\.(png|jpe?g|svg|mp4)$/));

    {/*
    <div className="home-container">
      <div className="center-vertically">
        <TitleAndMarquee />
      </div>
      <div className="content-container">
          <div className="layers-container-1">
            <ContentLayer images={images1} ref={layer1Ref} className="content-layer1" speed={0.5} opposite={true} />
            <ContentLayer images={images2} ref={layer2Ref} className="content-layer2" speed={2} opposite={false}/>
          </div>
          <div className="layers-container-2">
            <ContentLayer images={images3} ref={layer3Ref} className="content-layer3" speed={1.5} opposite={true} />
          </div>
      </div>
    </div>
    */}
  return (
    <>
    {/* hacky duplicate title solution
    <div className="title-text hawk-svg dupe">
        <img src={HawkText} alt="HAWK"/>
    </div>
    <div className="title-text child-svg dupe">
        <img src={ChildText} alt="CHILD"/>
    </div>
    <div className="title-text diy-svg dupe">
        <img src={DiyText} alt="DIY"/>
    </div>
    */}
    <div className="background-noise"></div>
    <div className="home-container3">
        <div className="title-text diy-svg">
            <img src={DiyText} alt="DIY"/>
        </div>
        <div class="right-half-column">
            <ContentLayer images={images3} ref={layer3Ref} className="content-layer3" speed={1.5} opposite={true} />
        </div>
        <div className="title-text hawk-svg">
            <img src={HawkText} alt="HAWK"/>
        </div>
        <div class="left-full-column">
            <ContentLayer images={images1} ref={layer1Ref} className="content-layer1" speed={0.5} opposite={true} />
        </div>
        <div class="right-column">
            <ContentLayer images={images2} ref={layer2Ref} className="content-layer2" speed={2} opposite={false}/>
        </div>
        <div className="title-text child-svg">
            <img src={ChildText} alt="CHILD"/>
        </div>
    </div>
    </>
  );
};

export default Home2;
