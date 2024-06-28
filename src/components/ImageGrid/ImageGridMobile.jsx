import React from "react";
import "./ImageGridMobile.css";
import EmergingImage from "../EmergingImage/EmergingImage";
import Scene from "../Scene";

//import reemfields1 from "./imgs/reemfields_1.jpg";
import reemfields2 from "./imgs/reemfields_2.jpg";
import reemfields3 from "./imgs/reemfields_3.jpg";
import evian from "./imgs/evian-edited.mp4";
import crowd1 from "./imgs/crowd_1.jpg";
// import logo from "./imgs/logo.png";
import evian_poster from "./imgs/evian_poster.jpg";
import markyb_poster from "./imgs/marky_b_seretide_poster.jpg";
import markyb from "./imgs/markyb.jpg";
// import suitcase from "./imgs/suitcase.jpg";
import kamixlo_woesum from "./imgs/kamixlo_woesum.jpg";
import skyh1_woesum_poster from "./imgs/skyh1_woesum_poster.jpg";
// import woesum_dj from "./imgs/woesum_dj-edited.mp4";
import evian_crowd1 from "./imgs/evian_christ_crowd_1.mp4";
import woesum_dj2 from "./imgs/woesum_dj_2.mp4";

function ImageGrid() {
  return (
    <>
      <Scene />
      <div className="grid-mobile">
        <figure className="grid__item" style={{ "--r": 1, "--c": 1, "--s": 5 }}>
          <div className="grid__item-img">
            <EmergingImage url={reemfields2} className="grid__item-img-inner" />
          </div>
        </figure>
        <figure className="grid__item" style={{ "--r": 1, "--c": 1, "--s": 5 }}>
          <div className="grid__item-img">
            <EmergingImage
              url={evian_crowd1}
              className="grid__item-img-inner"
            />
          </div>
        </figure>
        <figure className="grid__item" style={{ "--r": 2, "--c": 5, "--s": 3 }}>
          <div className="gr squreid__item-img">
            <EmergingImage url={reemfields3} className="grid__item-img-inner" />
          </div>
        </figure>
        <figure className="grid__item" style={{ "--r": 3, "--c": 3, "--s": 3 }}>
          <div className="grid__item-img">
            <EmergingImage url={evian} className="grid__item-img-inner" />
          </div>
        </figure>
        <figure className="grid__item" style={{ "--r": 5, "--c": 3, "--s": 7 }}>
          <div className="grid__item-img">
            <EmergingImage url={crowd1} className="grid__item-img-inner" />
          </div>
        </figure>
        <figure className="grid__item" style={{ "--r": 7, "--c": 3, "--s": 3 }}>
          <div className="grid__item-img">
            <EmergingImage
              url={evian_poster}
              className="grid__item-img-inner"
            />
          </div>
        </figure>
        <figure className="grid__item" style={{ "--r": 9, "--c": 1, "--s": 5 }}>
          <div className="grid__item-img">
            <EmergingImage
              url={markyb_poster}
              className="grid__item-img-inner"
            />
          </div>
        </figure>
        <figure className="grid__item" style={{ "--r": 8, "--c": 6, "--s": 4 }}>
          <div className="grid__item-img">
            <EmergingImage url={markyb} className="grid__item-img-inner" />
          </div>
        </figure>
        <figure
          className="grid__item"
          style={{ "--r": 11, "--c": 4, "--s": 2 }}
        >
          <div className="grid__item-img">
            <EmergingImage
              url={kamixlo_woesum}
              className="grid__item-img-inner"
            />
          </div>
        </figure>
        <figure
          className="grid__item"
          style={{ "--r": 12, "--c": 1, "--s": 3 }}
        >
          <div className="grid__item-img">
            <EmergingImage
              url={skyh1_woesum_poster}
              className="grid__item-img-inner"
            />
          </div>
        </figure>
        <figure
          className="grid__item"
          style={{ "--r": 13, "--c": 4, "--s": 5 }}
        >
          <div className="grid__item-img">
            <EmergingImage url={woesum_dj2} className="grid__item-img-inner" />
          </div>
        </figure>
      </div>
    </>
  );
}

export default ImageGrid;
