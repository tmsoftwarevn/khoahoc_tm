import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} style={styles.scrollToTop}>
          <FaArrowAltCircleUp className="text-2xl text-orange-500" />
        </div>
      )}
    </>
  );
};

const styles = {
  scrollToTop: {
    position: "fixed",
    bottom: "40px",
    right: "30px",

    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: "1000",
  },
};

export default ScrollToTop;
