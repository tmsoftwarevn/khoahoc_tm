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
    // <section className="ezy__featured15 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
    //   <div className="container px-4 ">
    //     <div className="grid grid-cols-12 mb-12">
    //       <div className="col-span-12 lg:col-span-7">
    //         <h2 className="text-[25px] md:text-[45px] leading-none font-bold mb-6">
    //           Our Features
    //         </h2>
    //         <p className="text-lg mb-6">
    //           Assumenda non repellendus distinctio nihil dicta sapiente,
    //           quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-12 gap-y-6 md:gap-x-6">
    //       <div className="col-span-12 lg:col-span-6">
    //         <div
    //           className="bg-center bg-no-repeat bg-cover rounded-[20px] w-full h-full min-h-[150px] float-right lg:w-[50vw] lg:rounded-l-none"
    //           style={{
    //             backgroundImage:
    //               "url(https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg)",
    //           }}
    //         ></div>
    //       </div>
    //       <div className="col-span-12 lg:col-span-6">
    //         <div className="lg:ml-12 gap-6">
    //           {features.map((feature, i) => (
    //             <FeatureItem feature={feature} key={i} />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Natural Language Processing (NLP):
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  The AI product utilizes advanced NLP algorithms to understand
                  and interpret human language, enabling it to accurately
                  process and analyze text-based inputs.
                </p>
                <div className="mt-6">
                  <a
                    className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                    href="/login"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                loading="lazy"
                width={647}
                height={486}
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }}
                src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Sentiment Analysis:
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  The product has built-in sentiment analysis capabilities,
                  allowing it to determine the sentiment (positive, negative, or
                  neutral) expressed in text or customer feedback.
                </p>
                <div className="mt-6">
                  <a
                    className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                    href="/login"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                alt="Inbox user interface"
                loading="lazy"
                width={647}
                height={486}
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }}
                src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Natural Language Generation (NLG):
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  The AI product can generate human-like written content,
                  summaries, or reports based on structured data or analysis
                  results.
                </p>
                <div className="mt-6">
                  <a
                    className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                    href="/login"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                loading="lazy"
                width={646}
                height={485}
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }}
                src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature15;
