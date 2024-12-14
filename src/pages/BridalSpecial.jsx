import React, { useEffect, useState } from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../components/common/Image";
import List from "../components/common/List";
import ListItem from "../components/common/ListItem";
import { bridalCloths, shoes } from "../assets/data/services";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BridalSpecial = () => {
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
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main>
      <section className="bg-banner bg-cover bg-bottom bg-no-repeat py-[150px] 2xl:py-[200px]">
        <Container>
          <Flex className="items-center gap-10">
            <div data-aos="fade-right" className="w-full lg:w-1/2">
              <h1 className="text-4xl font-extrabold leading-[60px] text-white 2xl:text-5xl">
                Bridal Special
              </h1>

              <p className="mt-5 text-lg font-medium text-white">
                Start your new life journey with best deals
              </p>
            </div>
          </Flex>
        </Container>
      </section>

      <section className="my-10">
        <Container>
          <Flex className="flex-col gap-10 md:flex-row">
            <div data-aos="fade-right" className="w-full">
              <h2 className="mb-5 text-xl font-bold leading-[40px] text-primary xl:text-2xl 2xl:text-3xl">
                Bridal Grace: Exclusive Three piece Collection for Your Big Day
              </h2>

              <p className="text-justify text-base font-normal xl:text-xl">
                Discover the perfect blend of elegance and comfort with our
                bridal Three piece collection, crafted to make your wedding
                celebrations truly unforgettable. Each outfit is a masterpiece,
                featuring exquisite embroidery, luxurious fabrics, and intricate
                designs that capture the essence of timeless beauty.
              </p>

              <p className="mt-2 text-justify text-base font-normal xl:text-xl">
                From traditional classics to modern chic, our bridal Three piece
                range offers a variety of styles and colors to suit every
                bride’s taste. Whether you’re looking for vibrant hues or subtle
                pastels, our collection ensures you’ll shine with grace and
                charm on your special day.
              </p>

              <p className="mt-2 text-justify text-base font-bold text-red-500 xl:text-xl">
                Three piece package per set 1300 tk (Minimum order 4 set)
              </p>

              <h3 className="mt-2 text-xl font-bold leading-[40px] text-primary xl:text-2xl 2xl:text-3xl">
                Fabric properties:
              </h3>

              <List className="mt-1">
                <ListItem className="mb-1 text-lg font-semibold">
                  1. Zumzum digital switch Lawn and Malhar lawn
                </ListItem>

                <ListItem className="mb-1 text-lg font-semibold">
                  2. Pure cotton unstitch premium quality
                </ListItem>
              </List>

              {/* <Link className="mt-10 inline-flex items-center gap-2 rounded-lg border-[3px] border-black px-10 py-3 text-sm font-semibold text-black duration-300 ease-in-out hover:gap-4 hover:border-primary hover:bg-primary hover:text-white xl:text-base 2xl:text-lg">
                View Our Events <FaArrowRight />
              </Link> */}
            </div>
          </Flex>

          <Flex className="mt-10 flex-wrap items-center justify-between">
            {bridalCloths.map((data, i) => (
              <div
                key={i}
                data-aos="zoom-in-down"
                className="group relative mx-auto mb-10 h-full w-full overflow-hidden rounded-lg shadow-xl duration-300 ease-in-out sm:w-[80%] md:w-[48%] lg:h-[280px] xl:w-[32%]"
              >
                <Image src={data.img} alt={data.id} className="h-full w-full" />

                <div className="absolute left-0 top-0 flex h-[120px] w-[120px] items-center justify-center rounded-br-[100%] bg-primary/90">
                  <h3 className="absolute left-5 top-10 text-center text-base font-bold text-white duration-300 ease-in-out">
                    Top Rated
                  </h3>
                </div>
              </div>
            ))}
          </Flex>
        </Container>
      </section>

      <section className="my-10">
        <Container>
          <div data-aos="fade-right" className="w-full">
            <h2 className="mb-5 text-xl font-bold leading-[40px] text-primary xl:text-2xl 2xl:text-3xl">
              Step into Elegance: Exquisite Bridal Shoes for Your Special Day
            </h2>

            <p className="text-justify text-base font-normal xl:text-xl">
              Complete your bridal look with our stunning ladies' bridal shoe
              collection, crafted to perfection by skilled artisans. Each pair
              is designed with precision, combining timeless elegance, superior
              durability, and unmatched comfort to ensure you walk with
              confidence and grace on your big day.
            </p>

            <p className="mt-2 text-justify text-base font-normal xl:text-xl">
              Whether you prefer delicate embellishments, classic designs, or
              modern chic styles, our collection has something to match every
              bride’s vision. Made with premium materials and a focus on
              comfort, these shoes will keep you at ease from the aisle to the
              dance floor.
            </p>
          </div>

          <Flex className="mt-10 flex-wrap items-center justify-between">
            {shoes.map((data, i) => (
              <div
                key={i}
                data-aos="zoom-in-down"
                className="group relative mx-auto mb-10 h-full w-full overflow-hidden rounded-lg shadow-xl duration-300 ease-in-out sm:w-[80%] md:w-[48%] lg:h-[280px] xl:w-[32%]"
              >
                <Image src={data.img} alt={data.id} className="h-full w-full" />

                <div className="absolute left-0 top-0 flex h-[120px] w-[120px] items-center justify-center rounded-br-[100%] bg-primary/90">
                  <h3 className="absolute left-5 top-10 text-center text-base font-bold text-white duration-300 ease-in-out">
                    Top Rated
                  </h3>
                </div>
              </div>
            ))}
          </Flex>

          <div className="text-center">
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-lg border-[3px] border-black px-10 py-3 text-sm font-semibold text-black duration-300 ease-in-out hover:gap-4 hover:border-primary hover:bg-primary hover:text-white xl:text-base 2xl:text-lg"
            >
              Contact Us <FaArrowRight />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default BridalSpecial;
