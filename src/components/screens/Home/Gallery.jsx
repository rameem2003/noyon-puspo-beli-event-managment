import React, { useState } from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../../common/Image";

const Gallery = () => {
  const [slide, setSlide] = useState(0);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          transform: "translateY(-50px)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === slide
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                backgroundColor: "black",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                backgroundColor: "gray",
              }
        }
      >
        {/* {i + 1} */}
      </div>
    ),

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="my-10">
      <Container>
        <Flex className="flex-col gap-10 md:flex-row">
          <div data-aos="fade-right" className="w-full md:w-1/2">
            <h2 className="mb-5 text-xl font-bold leading-[40px] text-primary xl:text-2xl 2xl:text-3xl">
              Arrange program in your own way, we make it hassle free and
              affordable for you.
            </h2>

            <p className="text-justify text-base font-normal xl:text-xl">
              Design your program exactly the way you envision it – we’re here
              to make the entire process smooth, hassle-free, and
              budget-friendly. Whether you’re creating something from scratch or
              enhancing an existing idea, our flexible services adapt to your
              needs and preferences. With a focus on affordability and
              convenience, we ensure every step is seamless, from initial
              planning to final execution. Let us take care of the technical and
              logistical challenges while you focus on bringing your vision to
              life. Your goals, your way – made easy and accessible by us.
            </p>

            <Link className="mt-10 inline-flex items-center gap-2 rounded-lg border-[3px] border-black px-10 py-3 text-sm font-semibold text-black duration-300 ease-in-out hover:gap-4 hover:border-primary hover:bg-primary hover:text-white xl:text-base 2xl:text-lg">
              View Our Events <FaArrowRight />
            </Link>
          </div>

          <div data-aos="zoom-in-down" className="w-full md:w-1/2">
            <Slider {...settings}>
              <Image
                className="h-full w-full rounded-lg object-cover"
                src="/slides/slide1.JPG"
                alt="banner"
              />
              <Image
                className="h-full w-full rounded-lg object-cover"
                src="/slides/slide2.JPG"
                alt="banner"
              />
              <Image
                className="h-full w-full rounded-lg object-cover"
                src="/slides/slide4.JPG"
                alt="banner"
              />
              <Image
                className="h-full w-full rounded-lg object-cover"
                src="/slides/slide5.JPG"
                alt="banner"
              />
              <Image
                className="h-full w-full rounded-lg object-cover"
                src="/slides/slide6.JPG"
                alt="banner"
              />
            </Slider>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Gallery;
