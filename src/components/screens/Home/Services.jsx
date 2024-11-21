import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import { services } from "../../../assets/data/services";
import Image from "../../common/Image";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="my-20">
      <Container>
        <h2 className="mb-5 font-bold leading-[40px] text-primary xl:text-2xl 2xl:text-3xl">
          Get all services
        </h2>
        <p className="text-base font-semibold">
          We Have Wide Range of Services to Serve You
        </p>

        <Flex className="mt-10 flex-wrap items-center justify-between">
          {services.slice(0, 6).map((data, i) => (
            <div
              data-aos="zoom-in-down"
              className="group relative mb-10 h-[280px] w-[32%] overflow-hidden rounded-lg shadow-xl duration-300 ease-in-out"
            >
              <Image
                src={data.thumb}
                alt={data.title}
                className="h-full w-full"
              />

              <div className="absolute left-0 top-0 flex h-0 w-full items-center justify-center bg-primary/80 bg-white duration-300 ease-in-out group-hover:h-full">
                <div className="duration-300 ease-in-out">
                  <h3 className="scale-0 text-center text-4xl font-bold text-white duration-300 ease-in-out group-hover:scale-100">
                    {data.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-2 flex w-full items-center justify-center">
            <Link className="mx-auto inline-flex items-center gap-2 rounded-lg border-[3px] border-black px-10 py-3 font-semibold text-black duration-300 ease-in-out hover:gap-4 hover:border-primary hover:bg-primary hover:text-white xl:text-base 2xl:text-lg">
              Load More <FaArrowRight />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Services;
