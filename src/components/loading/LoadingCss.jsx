"use client";
import "./loading.scss";
import { useEffect, useState } from "react";
import AnimationBanner from "@/ui/animation-banner/AnimationBanner";
const LoadingCss = () => {
  // return <div className="loading"></div>;
  return (
    // <div className="spinner center">
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    //   <div className="spinner-blade" />
    // </div>
    <AnimationBanner />
  );
};

export default LoadingCss;
