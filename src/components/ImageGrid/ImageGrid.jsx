import React from "react";
import "./ImageGrid.css";
import EmergingImage from "../EmergingImage/EmergingImage";
import Scene from "../Scene";

import dog from "../dog.jpeg";

//import reemfields1 from "./imgs/reemfields_1.jpg";
import reemfields2 from "./imgs/reemfields_2.jpg";
import reemfields3 from "./imgs/reemfields_3.jpg";
import evian from "./imgs/evian.mp4";
import crowd1 from "./imgs/crowd_1.jpg";
import logo from "./imgs/logo.png";
import evian_poster from "./imgs/evian_poster.jpg";

function ImageGrid() {
  return (
    <>
      <Scene />
      <div className="grid">
        <figure className="grid__item" style={{ "--r": 1, "--c": 1, "--s": 5 }}>
          <div className="grid__item-img">
            <EmergingImage url={reemfields2} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure className="grid__item" style={{ "--r": 2, "--c": 5, "--s": 3 }}>
          <div className="grid__item-img">
            <EmergingImage url={evian} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure className="grid__item" style={{ "--r": 3, "--c": 3, "--s": 3 }}>
          <div className="grid__item-img">
            <EmergingImage url={reemfields3} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure className="grid__item" style={{ "--r": 4, "--c": 1, "--s": 2 }}>
          <div className="grid__item-img">
            <EmergingImage url={logo} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure className="grid__item" style={{ "--r": 5, "--c": 3, "--s": 7 }}>
          <div className="grid__item-img">
            <EmergingImage url={crowd1} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure className="grid__item" style={{ "--r": 6, "--c": 2 }}>
          <div className="grid__item-img">
            <EmergingImage url={logo} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure className="grid__item" style={{ "--r": 7, "--c": 3, "--s": 3 }}>
          <div className="grid__item-img">
            <EmergingImage
              url={evian_poster}
              className="grid__item-img-inner"
            />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure className="grid__item" style={{ "--r": 8, "--c": 6, "--s": 2 }}>
          <div className="grid__item-img">
            <EmergingImage url={dog} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure className="grid__item" style={{ "--r": 9, "--c": 1, "--s": 5 }}>
          <div className="grid__item-img">
            <EmergingImage url={dog} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure
          className="grid__item"
          style={{ "--r": 10, "--c": 6, "--s": 3 }}
        >
          <div className="grid__item-img">
            <EmergingImage url={dog} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure
          className="grid__item"
          style={{ "--r": 11, "--c": 4, "--s": 2 }}
        >
          <div className="grid__item-img">
            <EmergingImage url={dog} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure
          className="grid__item"
          style={{ "--r": 12, "--c": 1, "--s": 3 }}
        >
          <div className="grid__item-img">
            <EmergingImage url={dog} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure
          className="grid__item"
          style={{ "--r": 13, "--c": 4, "--s": 5 }}
        >
          <div className="grid__item-img">
            <EmergingImage url={dog} className="grid__item-img-inner" />
          </div>
          <figcaption className="grid__item-caption">
            <h3>Lorem ipsum dolor sit amet</h3> <span>2023</span>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default ImageGrid;
