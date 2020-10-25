import React from "react";
import "./Showcase.scss";
import ImgOne from "./images/img-5.jpg";
import ImgTwo from "./images/img-6.jpg";
import ImgThree from "./images/img-7.jpg";

function Showcase() {
  return (
    <>
      <div className="images">
        <img src={ImgOne} alt="sample1" />
        <img src={ImgTwo} alt="sample2" />
        <img src={ImgThree} alt="sample3" />
      </div>
    </>
  );
}

export default Showcase;
