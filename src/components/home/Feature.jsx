import React from "react";

import Appearance from "@/ui/appearance/Appearance";
import ListFeature from "@/ui/list-feature/ListFeature";
import "./feature.scss";
// import Card3d from "@/ui/card-3d/Card3d";

const Feature15 = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-700 to-black pt-32 pb-32 space-y-24">
      <Appearance
        initialProps={{ opacity: 0, y: 70, scale: 0.9 }}
        finalProps={{ opacity: 1, y: 0, scale: 1 }}
      >
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              
              <ListFeature />
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  
                  className="w-full image-3d-right rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-full"
                  style={{ color: "transparent" }}
                  src="/f1.png"
                />
                
              </div>
            </div>
          </div>
        </div>
      </Appearance>

      <Appearance
        initialProps={{ opacity: 0, y: 100, scale: 0.9 }}
        finalProps={{ opacity: 1, y: 0, scale: 1 }}
      >
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  className="w-full image-3d-left rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-full"
                  style={{ color: "transparent" }}
                  src="/f2.png"
                />
              </div>
            </div>

            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              
              <ListFeature />
            </div>

          </div>
        </div>
      </Appearance>

      <Appearance
        initialProps={{ opacity: 0, y: 100, scale: 0.9 }}
        finalProps={{ opacity: 1, y: 0, scale: 1 }}
      >
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <ListFeature />
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  
                  className="w-full image-3d-right rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-full"
                  style={{ color: "transparent" }}
                  src="/f3.png"
                />
              </div>
            </div>
          </div>
        </div>
      </Appearance>
    </div>
  );
};

export default Feature15;
