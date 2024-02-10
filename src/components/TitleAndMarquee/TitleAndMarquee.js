import './Title.css';
import HawkchildText from '../../assets/title_text_hawkchild.svg';
import DiyText from '../../assets/title_text_diy.svg';
import LogoMarquee from './LogoMarquee';

export default function TitleAndMarquee() {
  return (
      <div className="title-and-marquee-container">
        <img id="hawkchild-svg" src={HawkchildText} alt="HAWKCHILD"/>
        <div className="diy-and-marquee">
            <LogoMarquee />
            <img className="title-text" id="diy-svg" src={DiyText} alt="DIY"/>
        </div>
      </div>
  );
}
