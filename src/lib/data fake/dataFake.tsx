
export const dataBook = () => {
    let data = {
        "id": 9,
        "author": "Mai Lan Hương, Hà Thanh Uyên",
        "thumbnail": "Giáº£i ThÃ­ch Ngá»¯ PhÃ¡p Tiáº¿ng Anh (Vá»i BÃ i Táº­p VÃ  ÄÃ¡p Ãn)-1692243808201.webp",
        "slider": "[\"Giáº£i ThÃ­ch Ngá»¯ PhÃ¡p Tiáº¿ng Anh (Vá»i BÃ i Táº­p VÃ  ÄÃ¡p Ãn)2-1692243814473.webp\"]",
        "mainText": "Giải Thích Ngữ Pháp Tiếng Anh Với Bài Tập Và Đáp Án (TB 2022)",
        "price": 178000,
        "sold": 345,
        "quantity": 777,
        "rate": 5,
        "slug": "giai-thich-ngu-phap-tieng-anh-voi-bai-tap-va-dap-an-tb-2022",
        "description": null,
        "hinhthuc": "",
        "ngayxuatban": "",
        "nhaxuatban": "",
        "category": "Sách Học Ngoại Ngữ tt",
        "createdAt": "2023-08-17T03:41:59.000Z",
        "updatedAt": "2024-06-03T04:58:12.000Z",
        "category.id": 2
    }
    return data;
}

  // <div
    //   className="cursor-pointer pb-3 card"
    //   onClick={() => handleRedirectBook(item)}
    // >
    //   <div className="h-[250px] overflow-hidden">
    //     <Image
    //       loading="lazy"
    //       src={`${process.env.URL_BACKEND}/images/${item?.thumbnail}`}
    //       alt={item.mainText}
    //       width="0"
    //       height="0"
    //       sizes="100vw"
    //       style={{ objectFit: "cover" }}
    //       className="w-full h-full"
    //     />
    //   </div>

    //   <div className="line-clamp-2 h-[40px] px-5 my-2 leading-5 duration-100 hover:text-orange-600">
    //     {item.mainText}
    //   </div>

    //   <div className="px-5 h-fit text-xs leading-5 italic text-gray-600 font-thin line-clamp-1 ">
    //     {item.author}
    //   </div>

    //   <div className="text-orange-600 font-semibold px-5 mt-1">
    //     {new Intl.NumberFormat("vi-VN", {
    //       style: "currency",
    //       currency: "VND",
    //     }).format(item.price_sale)}
    //   </div>

    //   <div className="flex items-center gap-3 px-5 text-xs mt-1">
    //     <div className=" line-through text-gray-400">
    //       {new Intl.NumberFormat("vi-VN", {
    //         style: "currency",
    //         currency: "VND",
    //       }).format(item.price)}
    //     </div>
    //     <div className="p-1 bg-red-500 text-white">
    //      - {Math.round(((item.price - item.price_sale) / item.price) * 100)}%
    //     </div>
    //   </div>
    // </div>