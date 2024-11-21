import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-banner bg-cover bg-bottom bg-no-repeat py-[200px]">
      <Container>
        <Flex className="items-center gap-10">
          <div className="w-1/2">
            <h1 className="text-5xl font-extrabold leading-[60px] text-white">
              The Most Trusted Event Management Platform in Bangladesh. Ensuring
              of Quality & Convenience.
            </h1>

            <p className="mt-5 text-lg font-medium text-white">
              24/7 non-stop free quality service at your door-step. 360 degree
              event services on single platform.
            </p>

            <Link className="mt-10 inline-flex items-center gap-2 rounded-lg border-[3px] border-white px-10 py-3 text-lg font-semibold text-white duration-300 ease-in-out hover:gap-4 hover:bg-white hover:text-black">
              Contact Now <FaArrowRight />
            </Link>
          </div>

          <div className="w-1/2">
            <div className="border-white-700 relative h-[400px] w-full rounded-lg border-[5px] p-3 shadow-customOne">
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
