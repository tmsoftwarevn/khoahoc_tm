import Image from "next/image";
import { Carousel } from "antd";

const SlideHome = (props) => {
  const { listBanner } = props;

  return (
    <Carousel draggable={true} dots={false} autoplay infinite>
      {listBanner &&
        listBanner.map((item, idx) => {
          return (
            <div key={`fbbdf${idx}`}>
              <div className="w-full h-full">
                <Image
                  src={`${process.env.URL_BACKEND}/images/${item?.thumbnail}`}
                  alt="TM Book"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="w-full h-[170px] sm:h-auto lg:h-[348px] "
                />
              </div>
            </div>
          );
        })}
    </Carousel>
  );
};

export default SlideHome;
