"use client";
import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import { Pagination, Row } from "antd";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "../../components/card/Card";

const Search = () => {
  const [current, setCurrent] = useState(1);
  const [limit, setLimit] = useState(20); // 20
  const [dataSearch, setDataSearch] = useState("");
  const [total, setTotal] = useState(0);

  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("text"));
  const router = useRouter();

  useEffect(() => {
    const fetch_Search = async () => {
      const res = await fetch(
        `${process.env.URL_BACKEND}/api/v1/search_product?page=${current}&limit=${limit}&mainText=${search}`
      );
      const result = await res.json();
      if (result && result.data) {
        setDataSearch(result.data.result);
        setTotal(result.data.meta.total);
      }
    };

    fetch_Search();
  }, [current, search]);

  useEffect(() => {
    if (searchParams.get("page")) {
      setCurrent(searchParams.get("page"));
    } else {
      setCurrent(1);
    }
    if (searchParams.get("text")) {
      setSearch(searchParams.get("text"));
    } else {
      setSearch("");
    }
    window.scrollTo(0, 0);
  }, [searchParams]);

  const handleChangePage = (p, s) => {
    setCurrent(p);
    router.push(`/tim-kiem?text=${search}&page=${p}`);
  };

  return (
    <>
      <Header />

      <div className="page-search mt-5 px-2 pb-5">
        <div className="container">
          <div className="xs:text-xs text-xl italic text-gray-600 mb-5">
            Kết quả tìm kiếm: ( {search} )
          </div>
          {dataSearch.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
                {dataSearch &&
                  dataSearch.map((item, idx) => {
                    return (
                      <div
                        key={`pecm${idx}`}
                        className="col-span-1 bg-white shadow-gray-400 shadow-md border border-transparent hover:-translate-y-2 duration-300"
                      >
                        <Card item={item} />
                      </div>
                    );
                  })}
              </div>

              <Row
                style={{ display: "flex", justifyContent: "center" }}
                className="mt-10"
              >
                <Pagination
                  showSizeChanger={false}
                  current={current}
                  total={total}
                  pageSize={limit}
                  responsive
                  onChange={(p, s) => handleChangePage(p, s)}
                />
              </Row>
            </>
          ) : (
            <>
              <div className="text-center">
                <i>Không có kết quả nào.</i>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Search;
