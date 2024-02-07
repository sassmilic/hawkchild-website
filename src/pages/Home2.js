import React from 'react';
import ContentLayer from '../components/ContentLayer'
import './Home2.css';

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

    const images1 = importAll(require.context('../assets/collage/posters', false, /\.(png|jpe?g|svg)$/));

    console.log("HERE");
console.log(images1);

  return (
    <div className="home-container">
      <div className="marquee">
        Marquee Content
      </div>
      <div className="title-svg">
        <img src={HawkchildText} alt="HAWKCHILD DIY"/>
      </div>
      <div className="layers-container">
        {/*
        <Layer ref={layer1Ref} className="layer1-style" speed={0.5} images={imagesForLayer1} />
        <Layer ref={layer2Ref} className="layer2-style" speed={1.0} images={imagesForLayer2} />
        <Layer ref={layer3Ref} className="layer3-style" speed={0.5} images={imagesForLayer3} opposite={true} />
        */}
        <ContentLayer images={images1} ref={layer1Ref} className="content-layer1" speed={0.5} opposite={true} />
        <ContentLayer images={images1} ref={layer2Ref} className="content-layer2" speed={2.0} />
        <ContentLayer images={images1} ref={layer3Ref} className="content-layer3" speed={2.0} opposite={true} />
      </div>
    </div>
  );
};

export default Home2;
