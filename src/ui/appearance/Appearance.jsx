import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Appearance = ({ children, initialProps, finalProps }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        initialProps,
        {
          ...finalProps,
          scrollTrigger: {
            trigger: elementRef.current,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, elementRef);

    return () => ctx.revert(); // Cleanup the animations on unmount
  }, [initialProps, finalProps]);

  return <div ref={elementRef}>{children}</div>;
};

export default Appearance;
