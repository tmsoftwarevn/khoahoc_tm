import Blog from "./Blog";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const arr = ["1", "2", "2", "3", "4"];

const ListBlog = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [listBread, setListBread] = useState(["Tin tức"]);
  const limit = 12;
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(3);

  // const fetch_baiviet = async () => {
  //   let page = params.get("page") ? params.get("page") : 1;
  //   const res = await fetch(
  //     `${process.env.URL_BACKEND}/api/v1/listbaiviet-home?page=${page}&limit=${limit}`
  //   );
  //   const result = await res.json();
  //   console.log("ressssssss", result);

  //   if (result && result.data) {
  //     setList(result.data.list);
  //     setTotal(result.data.meta.totalPage);
  //   }
  // };

  // useEffect(() => {
  //   fetch_baiviet();
  // }, [params.get("page")]);

  const handlePaginate = (e, page) => {
    router.push(`/tin-tuc/?page=${page}`);
  };

  return (
    // <div className="">
    //   {/* <Breadcrum2 listBread={listBread} /> */}

    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2 mt-10">
    //     {arr &&
    //       arr.map((item, id) => {
    //         return (
    //           <>
    //             <div className="col-span-1 ">
    //               <Blog detail={item} />
    //             </div>
    //           </>
    //         );
    //       })}
    //   </div>

    //   <Box className="mt-10" sx={{ display: "flex", justifyContent: "center" }}>
    //     <Stack spacing={2}>
    //       <Pagination
    //         onChange={(e, page) => handlePaginate(e, page)}
    //         count={+total}
    //         color="primary"
    //       />
    //     </Stack>
    //   </Box>
    // </div>
    <div className="w-full dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            From The Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Dive into the latest in technology with our insightful blog posts.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {/* First blog post */}
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time dateTime="2023-10-11" className="mr-8">
                Oct 11, 2023
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="flex gap-x-2.5">
                  <img
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt
                    className="h-6 w-6 flex-none rounded-full bg-white/10"
                  />
                  John
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <a href="/tech-blog/post1">
                <span className="absolute inset-0" />
                The Future of Artificial Intelligence: Trends and Challenges
              </a>
            </h3>
          </article>
          {/* Second blog post */}
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time dateTime="2023-09-25" className="mr-8">
                Sept 25, 2023
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="flex gap-x-2.5">
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt
                    className="h-6 w-6 flex-none rounded-full bg-white/10"
                  />
                  Jane
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <a href="/tech-blog/post2">
                <span className="absolute inset-0" />
                The Rise of Blockchain Technology: A Comprehensive Guide
              </a>
            </h3>
          </article>
          {/* Third blog post */}
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img
              src="https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time dateTime="2023-09-24" className="mr-8">
                Sept 24, 2023
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="flex gap-x-2.5">
                  <img
                    src="https://randomuser.me/api/portraits/men/4.jpg"
                    alt
                    className="h-6 w-6 flex-none rounded-full bg-white/10"
                  />
                  Michael
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <a href="/tech-blog/post3">
                <span className="absolute inset-0" />
                How Quantum Computing Will Revolutionize Data Security
              </a>
            </h3>
          </article>
          {/* More blog posts can be added similarly */}
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
