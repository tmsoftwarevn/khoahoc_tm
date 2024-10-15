import Image from "next/image";
import { useRouter } from "next/navigation";
import "./card.css";

const Card = (props) => {
  const { item } = props;
  const router = useRouter();

  const handleRedirectBook = (book) => {
    router.push(`/${book.slug}`);
  };

  return (
    // <div
    //   className="relative cursor-pointer pb-3 card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    //   onClick={() => handleRedirectBook(item)}
    // >
    //   {/* Gradient background */}
    //   <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-300 to-pink-500 opacity-30 pointer-events-none "></div>

    //   {/* Card content, ensuring it's above the gradient */}
    //   <div className="relative z-10">
    //     <div className="h-[250px] overflow-hidden">
    //       <Image
    //         loading="lazy"
    //         src={`${process.env.URL_BACKEND}/images/${item?.thumbnail}`}
    //         alt={item.mainText}
    //         width="0"
    //         height="0"
    //         sizes="100vw"
    //         style={{ objectFit: "cover" }}
    //         className="w-full h-full hover:scale-105 transition-transform duration-500"
    //       />
    //     </div>

    //     <div className="line-clamp-2 h-[40px] px-5 my-2 leading-5 duration-100 hover:text-orange-600">
    //       {item.mainText}
    //     </div>

    //     <div className="px-5 h-fit text-xs leading-5 italic text-gray-600 font-thin line-clamp-1">
    //       {item.author}
    //     </div>

    //     <div className="text-orange-600 font-semibold px-5 mt-1">
    //       {new Intl.NumberFormat("vi-VN", {
    //         style: "currency",
    //         currency: "VND",
    //       }).format(item.price_sale)}
    //     </div>

    //     <div className="flex items-center gap-3 px-5 text-xs mt-1">
    //       <div className="line-through text-gray-400">
    //         {new Intl.NumberFormat("vi-VN", {
    //           style: "currency",
    //           currency: "VND",
    //         }).format(item.price)}
    //       </div>
    //       <div className="p-1 bg-red-500 text-white rounded-full">
    //         - {Math.round(((item.price - item.price_sale) / item.price) * 100)}%
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
    className="relative cursor-pointer pb-3 card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
    onClick={() => handleRedirectBook(item)}
  >
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-300 to-pink-500 opacity-30 pointer-events-none overflow-hidden">
      {/* Water ripple animation only on hover */}
      <div className="absolute inset-0 bg-white opacity-30 rounded-full scale-0 group-hover:animate-ripple group-hover:scale-150"></div>
    </div>
  
    {/* Card content, ensuring it's above the gradient */}
    <div className="relative z-10">
      <div className="h-[250px] overflow-hidden">
        <Image
          loading="lazy"
          src={`${process.env.URL_BACKEND}/images/${item?.thumbnail}`}
          alt={item.mainText}
          width="0"
          height="0"
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="w-full h-full hover:scale-105 transition-transform duration-500"
        />
      </div>
  
      <div className="line-clamp-2 h-[40px] px-5 my-2 leading-5 duration-100 hover:text-orange-600">
        {item.mainText}
      </div>
  
      <div className="px-5 h-fit text-xs leading-5 italic text-gray-600 font-thin line-clamp-1">
        {item.author}
      </div>
  
      <div className="text-orange-600 font-semibold px-5 mt-1">
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(item.price_sale)}
      </div>
  
      <div className="flex items-center gap-3 px-5 text-xs mt-1">
        <div className="line-through text-gray-400">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(item.price)}
        </div>
        <div className="p-1 bg-red-500 text-white rounded-full">
          - {Math.round(((item.price - item.price_sale) / item.price) * 100)}%
        </div>
      </div>
    </div>
  </div>
  
  

  );
};

export default Card;
