// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "I help businesses establish a strong and memorable identity by crafting impactful branding strategies.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "I create visually compelling and user-centered designs that combine aesthetics with functionality.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:"I specialize in building robust, responsive, and scalable web solutions using modern technologies.",
  },
  // {
  //   icon: <RxReader />,
  //   title: "Copywriting",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   icon: <RxRocket />,
  //   title: "SEO",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
];

const ServiceSlider = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgb(64,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-4 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,125,0.15)] transition-all duration-300">
                {/* icons */}
                <div className="text-3xl text-accent mb-4">{item.icon}</div>
                {/* title and des */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">
                    {item.description}
                  </p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-500"/>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
