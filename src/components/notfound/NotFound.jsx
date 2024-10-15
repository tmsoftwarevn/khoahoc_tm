import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <div className="text-3xl font-semibold text-orange-500">404</div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 ">
          Không tìm thấy trang
        </h1>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <div className="rounded-md bg-orange-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
              Trang chủ
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
