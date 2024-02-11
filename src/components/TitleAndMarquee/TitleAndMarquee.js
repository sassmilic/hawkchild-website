import './Title.css';
import HawkchildText from '../../assets/title_text_hawkchild.svg';
import HawkText from '../../assets/title_text_hawk.svg';
import ChildText from '../../assets/title_text_child.svg';
import DiyText from '../../assets/title_text_diy.svg';
import LogoMarquee from './LogoMarquee';

export default function TitleAndMarquee() {
  return (
      <div className="title-and-marquee-container">
        <div className="hawkchild-text">
            <img id="hawk-svg" src={HawkText} alt="HAWK"/>
            <img id="child-svg" src={ChildText} alt="CHILD"/>
        </div>
        <div className="diy-and-marquee">
            <LogoMarquee />
            <img className="title-text" id="diy-svg" src={DiyText} alt="DIY"/>
        </div>
      </div>
  );
}
