import Blog from "./Blog";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Breadcrum2 from "@/components/breadcrum/Breadcrum2";

const arr = ["1", "2", "2", "3", "4"];

const ListBlog = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [listBread, setListBread] = useState(["Tin tức"]);
  const limit = 12;
  const [list, setList] = useState([]);
  const [total, setTotal] = useState();

  const fetch_baiviet = async () => {
    let page = params.get("page") ? params.get("page") : 1;
    const res = await fetch(
      `${process.env.URL_BACKEND}/api/v1/listbaiviet-home?page=${page}&limit=${limit}`
    );
    const result = await res.json();
    console.log("ressssssss", result);

    if (result && result.data) {
      setList(result.data.list);
      setTotal(result.data.meta.totalPage);
    }
  };

  useEffect(() => {
    fetch_baiviet();
  }, [params.get("page")]);

  const handlePaginate = (e, page) => {
    router.push(`/tin-tuc/?page=${page}`);
  };

  return (
    <div className="">
      <Breadcrum2 listBread={listBread} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
        {list &&
          list.map((item, id) => {
            return (
              <>
                <div className="col-span-1 ">
                  <Blog detail={item} />
                </div>
              </>
            );
          })}
      </div>

      <Box className="mt-10" sx={{ display: "flex", justifyContent: "center" }}>
        <Stack spacing={2}>
          <Pagination
            onChange={(e, page) => handlePaginate(e, page)}
            count={+total}
            color="primary"
          />
        </Stack>
      </Box>
    </div>
  );
};

export default ListBlog;
