import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const OurSpeciality = () => {
  return (
    <section className="my-20">
      <Container>
        <h2 className="mb-5 text-2xl font-bold leading-[40px] text-primary 2xl:text-3xl">
          What's Our Speciality?
        </h2>
        <p className="text-base font-semibold">
          We Have Some Simple Key Strategy. To Give 100% Quality Services
        </p>

        <Flex className="mt-10 flex-wrap items-center justify-between">
          <div
            // data-aos="zoom-out-right"
            data-aos="zoom-in-down"
            className="group flex w-full cursor-pointer flex-col items-center gap-5 rounded-lg px-1 py-10 shadow-xl duration-300 ease-in-out hover:scale-[1.1] md:w-[48%] lg:w-[22%]"
          >
            <Image
              className="h-[120px] w-[120px] group-hover:animate-customBouns"
              src="/icon4.png"
            />

            <div className="text-center">
              <h4 className="text-xl font-bold">Optimize Cost & Time</h4>
            </div>
          </div>

          <div
            // data-aos="fade-up-right"
            data-aos="zoom-in-down"
            className="group flex w-full cursor-pointer flex-col items-center gap-5 rounded-lg px-1 py-10 shadow-xl duration-300 ease-in-out hover:scale-[1.1] md:w-[48%] lg:w-[22%]"
          >
            <Image
              className="h-[120px] w-[120px] group-hover:animate-customBouns"
              src="/icon5.png"
            />

            <div className="text-center">
              <h4 className="text-xl font-semibold">
                Verified Service Providers
              </h4>
            </div>
          </div>

          <div
            // data-aos="fade-up-left"
            data-aos="zoom-in-down"
            className="group flex w-full cursor-pointer flex-col items-center gap-5 rounded-lg px-1 py-10 shadow-xl duration-300 ease-in-out hover:scale-[1.1] md:w-[48%] lg:w-[22%]"
          >
            <Image
              className="h-[120px] w-[120px] group-hover:animate-customBouns"
              src="/icon6.png"
            />

            <div className="text-center">
              <h4 className="text-xl font-semibold">
                Committed Service Manager
              </h4>
            </div>
          </div>
          <div
            // data-aos="zoom-out-left"
            data-aos="zoom-in-down"
            className="group flex w-full cursor-pointer flex-col items-center gap-5 rounded-lg px-1 py-10 shadow-xl duration-300 ease-in-out hover:scale-[1.1] md:w-[48%] lg:w-[22%]"
          >
            <Image
              className="h-[120px] w-[120px] group-hover:animate-customBouns"
              src="/icon7.png"
            />

            <div className="text-center">
              <h4 className="text-xl font-semibold">24/7 Customer Support</h4>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default OurSpeciality;
