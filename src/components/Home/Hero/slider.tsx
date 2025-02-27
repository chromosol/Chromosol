import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pricedeta } from "@/app/api/data";
import Image from "next/image";
import { useRef } from "react";

const CardSlider = () => {
  const sliderRef = useRef(null); // Ref to control the slider

  const settings = {
    autoplay: true, // Enable autoplay
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 0, // Set to 0 for continuous movement
    speed: 8000, // Adjust speed for smooth constant movement
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear", // Use linear easing for constant speed
    pauseOnHover: true, // Pause on hover
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
      <div className="container mx-auto lg:max-w-screen-xl px-4 lg:-mt-8 mt-8">
      <Slider ref={sliderRef} {...settings}>
        {pricedeta.map((item, index) => (
          <div key={index} className="pr-6">
            <div className="px-5 py-6 bg-dark_grey bg-opacity-80 rounded-xl">
              <div className="flex items-center gap-5">
                <div
                  className={`${item.background} ${item.padding} rounded-full`}
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={item.width}
                    height={item.height}
                  />
                </div>
                <p className="text-white text-xs font-normal ">
                  <span className="text-16 font-bold mr-2">{item.title}</span>
                  {item.short}
                </p>
              </div>
              <div className="flex justify-between mt-7">
                <div className="">
                  <p className="text-16 font-bold text-white mb-0 leading-none">
                    {item.price}
                  </p>
                </div>
                <div className="">
                  <span className="text-error text-xs">{item.mark}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;