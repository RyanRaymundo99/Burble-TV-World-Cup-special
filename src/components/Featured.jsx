import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {BsBadge4K, BsBadgeHd }  from 'react-icons/bs';
import {FiAlertCircle }  from 'react-icons/fi';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { sliderData } from "../constants/FeaturedData";
import "../Global/Global.css";

const Featured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <div className="logo">
                    <LiveTvIcon style={{ fontSize: "45px", color: "white", marginRight: "10px" }}/>
                    <h2>{slide.heading}</h2>
                  </div>
                  <div className="options">
                    <BsBadge4K style={{ fontSize: "25px", color: "white", marginRight: "10px" }} />
                    <BsBadgeHd style={{ fontSize: "25px", color: "white", marginRight: "10px" }} />
                    <h2 className="options-text">{slide.options}</h2>
                    <h2>{slide.timer}</h2>
                    <FiAlertCircle style={{ fontSize: "25px", color: "white", marginRight: "10px" }} />
                    <h2>{slide.age}</h2>
                  </div>
                  <h1>{slide.subheading}</h1>
                  <p>{slide.desc}</p>
                  <hr />
                  <button className="--btn --btn-primary">Get Started</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Featured;