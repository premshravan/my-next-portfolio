// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Coffe Project",
          path: "/thumb1.jpg",
          href: "https://e-commerce-next-js-app-kxy3.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          href: "https://e-com-react-app-furniture.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb3.jpg",

          href: "https://react-coffee-blond.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          href:"https://notes-react-five.vercel.app/"
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  const router = useRouter(); // Initialize the useRouter hook

  // Handle onClick to navigate to the link
  const handleClick = (href) => {
    if (href) {
      // Use router.push to programmatically navigate to the link
      window.open(href, "_blank"); // Open the link in a new tab
    }
  };

  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 cursor-pointer">
              {slide.images.map((image, index) => (
                <div
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  key={index}
                  onClick={() => handleClick(image.href)} // Call the handleClick on image click
                >
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* Render Image */}
                    <Image
                      src={image.path}
                      width={390}
                      height={100}
                      alt={image.title || "Project Image"}
                      className="cursor-pointer"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e838cc] to-[#4fcd19] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                    {/* Title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 duration-300 transition-all">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100">Live</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        <div>
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
