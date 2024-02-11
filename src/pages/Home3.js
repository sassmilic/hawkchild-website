import React from 'react';
import TitleAndMarquee from '../components/TitleAndMarquee/TitleAndMarquee';
import ContentLayer from '../components/ContentLayer';
import './Home3.css';

import HawkchildText from './../assets/hawkchild_diy.svg';

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
    <div className="home-container3">
      <div className="background-noise">
      </div>
    </div>
  );
};

export default Home2;
