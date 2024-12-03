import Title from "./Title";
import "./feature.scss";
import ToolTips from "@/ui/tooltip/ToolTip";

const ListFeature = (props) => {
  const { name } = props;

  let arr_des = [
    {
      des: "Thực chiến làm nội dung bài viết trên: Fanpage, Website",
    },
    {
      des: "Xây dựng chân dung khách hàng cho dự án/sản phẩm",
    },
    {
      des: "Xây dựng kênh tiktok từ 0 lên 50.000 follower,",
    },
    {
      des: "Chạy quảng cáo Facebook cơ bản gia tăng tương tác",
    },
  ];

  return (
    <div>
      <ToolTips />
      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <div
          title="Get quote now"
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Xây dựng kế hoạch Marketing tuần
        </div>
      </div>

      <ul className="mt-3 flex flex-col space-y-2">
        {arr_des &&
          arr_des.map((item, idx) => {
            return (
              <li className="flex" key={item.des}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-2 h-auto w-6 text-white sm:w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  ></path>
                </svg>
                <p className="text-base text-white sm:text-lg">{item.des}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ListFeature;
