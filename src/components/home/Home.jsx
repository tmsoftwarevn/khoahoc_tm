import { SiGitbook } from "react-icons/si";
import { useRouter } from "next/navigation";
import SlideHome from "@/components/slide home/SlideHome";
import ButtonCate from "@/components/button-css/ButtonCate";

const Home = (props) => {
  const { listBanner, listCategory } = props;

  const router = useRouter();

  return (
    <div className="homepage">
      <div className="grid auto-rows-fr grid-cols-4 gap-4 mt-2 lg:mt-5 ">
        <div className="hidden lg:block lg:col-span-1 text-white shadow-gray-400 shadow-sm">
          <div className="text-xl text-center bg-orange-500 p-3 uppercase border-b border-gray">
            Danh mục sản phẩm
          </div>

          <div className="grid grid-cols-1">
            {listCategory?.length > 0 &&
              listCategory.map((item, index) => {
                return (
                  // <div
                  //   className="col-span-1 text-sm flex uppercase items-center duration-150 hover:bg-orange-700 cursor-pointer px-2 py-2 border-b border-gray"
                  //   key={`itemcategory-${index}`}
                  //   onClick={() => {
                  //     router.push(`/the-loai/${item.slug}`);
                  //   }}
                  // >
                  //   <SiGitbook className="mr-2" />
                  //   <div>{item.category}</div>

                  // </div>

                  <div
                    className="col-span-1 text-sm flex uppercase cursor-pointer relative px-5 py-2 bg-white isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-orange-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white text-orange-500"
                    key={`itemcategory-${index}`}
                    onClick={() => {
                      router.push(`/the-loai/${item.slug}`);
                    }}
                  >
                    <SiGitbook className="mr-2" />
                    <div>{item.category}</div>

                  </div>
                  
                );
              })}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3 ">
          <SlideHome listBanner={listBanner} />
        </div>
      </div>
    </div>
  );
};

export default Home;
