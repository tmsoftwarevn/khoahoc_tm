import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCalendarAlt } from "react-icons/fa";

const BlogForDetail = (props) => {
  const { item, idx } = props;
  const route = useRouter();
  return (
    <div
      className="grid grid-cols-1 gap-3 mt-5 h-full cursor-pointer"
      onClick={() => route.push(`/tin-tuc/${item?.slug}`)}
    >
      <div className="col-span-1 overflow-hidden rounded">
        <Image
          loading="lazy"
          src={`${process.env.URL_BACKEND}/images/${item?.thumbnail}`}
          alt={item?.tieude}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-[200px] relative z-0 rounded scale-110 transition-all duration-300 hover:scale-100 "
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="col-span-1">
        <div className=" text-xl line-clamp-2 cursor-pointer duration-200 hover:text-orange-500 mb-2">
          {item?.tieude}
        </div>
        <div className="flex mb-2 items-center">
          <FaCalendarAlt className="mr-2 text-orange-500" />
          <span> {moment(item?.createdAt).format("DD-MM-Y")}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogForDetail;
