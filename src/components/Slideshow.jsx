import React, {useState} from "react";
import "./Slideshow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slideshow = ({ pictures }) => {
  const [currentPic, setCurrentPic] = useState(0);

  const nextPic = () => setCurrentPic((currentPic + 1) % pictures.length);

  console.log(pictures.length)

  const previousPic = () => {
    const prevCurrentPic = currentPic - 1;
    if (prevCurrentPic < 0) {
      return setCurrentPic(pictures.length - 1);
    }
    return setCurrentPic((currentPic - 1) % pictures.length);
  };

  if (!pictures)
    return (
      <div>
        <p>loading...</p>
      </div>
    );

  return (
    <div className="slideshow_wrapper">
      {pictures.map((pic, i) => {
        const current = i === currentPic;
        return (
          <div key={pic}>
            <img src={pic} className={`${current ? "current" : ""}`} alt="" />
          </div>
        );
      })}

      <FontAwesomeIcon
        icon={faChevronLeft}
        className={`${pictures.length > 1 ? "arrow_left" : "noPrev"}`}
        onClick={previousPic}
        alt="previous picture"
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={nextPic}
        className={`${pictures.length > 1 ? "arrow_right" : "noNext"}`}
        alt="next picture"
      />
    </div>
  );
};

export default Slideshow;
