import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ani.scss";

const AnimationBanner = () => {
  const tileRevealRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const tileReveal = tileRevealRef.current;
    const banner = bannerRef.current;

    if (tileReveal && banner) {
      // Match the size of .tile-reveal to .banner-inner
      const { width, height } = banner.getBoundingClientRect();
      tileReveal.style.width = `${width}px`;
      tileReveal.style.height = `${height}px`;

      // Calculate number of tiles needed
      const tileSize = 75; // Match CSS dimensions
      const columns = Math.ceil(width / tileSize);
      const rows = Math.ceil(height / tileSize);
      const totalTiles = columns * rows;

      // Create tiles dynamically
      for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement("div");
        tile.className = "tile-reveal-square";
        tileReveal.appendChild(tile);
      }

      // Trigger GSAP animation
      gsap.to(".tile-reveal-square", {
        duration: 1,
        opacity: 0,
        scale: 0.75,
        ease: "power1.inOut",
        stagger: {
          each: 0.04,
          amount: 1,
          from: "center",
        },
      });
    }
  }, []);

  return (
    <div>
      <div ref={tileRevealRef} className="tile-reveal"></div>

      <div ref={bannerRef} className="banner-inner">
        <div className="bg-inner">
          
        </div>
      </div>
      
    </div>
  );
};

export default AnimationBanner;
