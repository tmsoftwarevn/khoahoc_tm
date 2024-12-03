import React, { useState } from "react";
import "./test.scss"; 

const Card3D = () => {
  const [style, setStyle] = useState({});
  const THRESHOLD = 15;

  const handleHover = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;
    const offsetLeft = currentTarget.getBoundingClientRect().left;
    const offsetTop = currentTarget.getBoundingClientRect().top;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    setStyle({
      transform: `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`,
    });
  };

  const resetStyles = () => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
    });
  };

  return (
    <div
      className="card-3d"
      style={style}
      onMouseMove={handleHover}
      onMouseLeave={resetStyles}
    >
      <img
        className="card-image"
        src="/124.jpg"
        alt="Beach"
      />
    </div>
  );
};

export default Card3D;
