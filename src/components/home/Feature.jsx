import React from "react";
import PropTypes from "prop-types";
import {
  faCamera,
  faCannabis,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const features = [
  {
    icon: faCannabis,
    title: "Product Design",
    description:
      "Bearing bearing form night spirit, for signs isn't, tree fourth i there two land deep man without seasons fill itself.",
  },
  {
    icon: faRandom,
    title: "Branding",
    description:
      "Third abundantly us after cattle won't is land heaven us whales grass bearing seasons fruitful own beast deep fruit him.",
  },
  {
    icon: faCamera,
    title: "Photography",
    description:
      "Man our from light they're cattle upon created female. You first land evening beast won't had bring first void meat.",
  },
];

const FeatureItem = ({ feature }) => {
  return (
    <div className="bg-blue-50 dark:bg-[#1E2735] rounded-l-[90px] relative p-6 pl-12 ml-12 mb-6 lg:mb-12">
      <div className="w-[74px] h-[74px] bg-blue-50 dark:bg-[#1E2735] text-blue-600 rounded-full text-[32px] inline-flex items-center justify-center shadow-xl -mt-[37px] mr-11 -ml-11 absolute top-1/2 left-0 mb-6">
        <FontAwesomeIcon icon={feature.icon} />
      </div>
      <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
      <p className="opacity-70">{feature.description}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
};

const Feature15 = () => {
  return (
    <section className="ezy__featured15 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 ">
        <div className="grid grid-cols-12 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="text-[25px] md:text-[45px] leading-none font-bold mb-6">
              Our Features
            </h2>
            <p className="text-lg mb-6">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-6 md:gap-x-6">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-[20px] w-full h-full min-h-[150px] float-right lg:w-[50vw] lg:rounded-l-none"
              style={{
                backgroundImage:
                  "url(https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg)",
              }}
            ></div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="lg:ml-12 gap-6">
              {features.map((feature, i) => (
                <FeatureItem feature={feature} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature15;
