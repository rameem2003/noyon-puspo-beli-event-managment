import React, { useEffect } from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-banner bg-cover bg-bottom bg-no-repeat py-[150px] md:py-[130px] 2xl:py-[200px]">
      <Container>
        <Flex className="flex-col items-center md:flex-row lg:gap-10">
          <div
            data-aos="fade-right"
            className="w-full text-center md:w-1/2 md:text-left"
          >
            <h1 className="text-2xl font-extrabold leading-[40px] text-white md:leading-[30px] lg:leading-[60px] xl:text-4xl 2xl:text-5xl">
              The Most Trusted Event Management Platform in Bangladesh. Ensuring
              of Quality & Convenience.
            </h1>

            <p className="mt-5 text-lg font-medium text-white">
              Round-the-clock premium service at your doorstep. Comprehensive
              all-in-one event solutions, all on one platform
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-lg border-[3px] border-white px-10 py-3 text-sm font-semibold text-white duration-300 ease-in-out hover:gap-4 hover:bg-white hover:text-black xl:text-base 2xl:text-lg"
            >
              Contact Now <FaArrowRight />
            </Link>
          </div>

          <div className="hidden w-full md:block md:w-1/2">
            <div
              data-aos="fade-left"
              className="border-white-700 relative h-[300px] w-full rounded-lg border-[5px] p-3 shadow-customOne xl:h-[400px]"
            >
              <Image
                className="absolute left-[20px] top-[-20px] h-full w-full rounded-lg"
                src="/banner.jpg"
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
