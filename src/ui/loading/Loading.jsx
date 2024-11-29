import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Loading.scss";
import Logo from "./Logo"
gsap.registerPlugin(ScrollTrigger);

const Preloader = () => {
  const preloaderRef = useRef();
  const preloaderContentRef = useRef();
  const tickerRef = useRef();
  const loadRef = useRef();
  const loadTrackRef = useRef();

  useEffect(() => {
    const preloaderTimeline = gsap.timeline();

    preloaderTimeline
      .to(preloaderContentRef.current, {
        ease: "sine",
        duration: 0.4,
        scale: 1,
        opacity: 1,
        delay: 0.4,
      })
      .to(tickerRef.current, {
        // x: "-50%",
        // ease: "linear",
        duration: 8,
        delay: -0.4,
      })
      .to(loadRef.current, {
        width: "100%",
        ease: "sine",
        duration: 1.5,
        delay: -5.5,
      })
      .to(preloaderContentRef.current, {
        scale: 0.9,
        opacity: 0,
        ease: "sine",
        duration: 0.4,
        delay: -4,
        onComplete: function () {
          ScrollTrigger.refresh();
        },
      })
      .to(loadTrackRef.current, {
        opacity: 0,
        ease: "sine",
        duration: 1.5,
        delay: -4,
      })
      .to(preloaderRef.current, {
        height: 0,
        ease: "sine",
        duration: 0.4,
        delay: -3.5,
      });
  }, []);

  return (
    <>
      <div className="mil-preloader-1" ref={preloaderRef}>
        <div className="mil-preloader-content" ref={preloaderContentRef}>
          <div className="mil-ticker mil-h5 mil-softened-80" ref={tickerRef}>
            {/* Welcome <span className="mil-accent">•</span>
            <b className="mil-text-stroke">Welcome</b>
            <span className="mil-accent">•</span> Welcome
            <span className="mil-accent">•</span>
            <b className="mil-text-stroke">Welcome</b>
            <span className="mil-accent">•</span> Welcome
            <span className="mil-accent">•</span>
            <b className="mil-text-stroke">Welcome</b>
            <span className="mil-accent">•</span> Welcome
            <span className="mil-accent">•</span>
            <b className="mil-text-stroke">Welcome</b>
            <span className="mil-accent">•</span> Welcome
            <span className="mil-accent">•</span> Welcome
            <span className="mil-accent">•</span> Welcome
            <span className="mil-accent">•</span>
            <b className="mil-text-stroke">Welcome</b>
            <span className="mil-accent">•</span> */}
            <Logo />

          </div>
        </div>
        <div className="mil-preloader-load-track" ref={loadTrackRef}>
          <div className="mil-preloader-load" ref={loadRef} />
        </div>
      </div>
    </>
  );
};

export default Preloader;
