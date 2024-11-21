import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const HowWorks = () => {
  return (
    <section className="my-20">
      <Container>
        <h2 className="mb-5 font-bold leading-[40px] text-primary xl:text-2xl 2xl:text-3xl">
          How we deal with our clients?
        </h2>
        <p className="text-base font-semibold">
          Simple we have 3 steps and you get free quality event service at your
          door step
        </p>

        <Flex className="mt-10 items-center justify-between">
          <div
            data-aos="zoom-out-right"
            className="group flex w-[28%] cursor-pointer flex-col items-center gap-5 rounded-lg px-5 py-10 shadow-xl duration-300 ease-in-out hover:scale-[1.1]"
          >
            <Image
              className="h-[120px] w-[120px] group-hover:animate-customBouns"
              src="/icon1.png"
            />

            <div className="text-center">
              <h4 className="text-xl font-semibold">Search & Book</h4>
              <p className="text-base font-medium">
                Order with contact details and Schedule
              </p>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="group flex w-[28%] cursor-pointer flex-col items-center gap-5 rounded-lg px-5 py-10 shadow-xl duration-300 ease-in-out hover:scale-[1.1]"
          >
            <Image
              className="h-[120px] w-[120px] group-hover:animate-customBouns"
              src="/icon2.png"
            />

            <div className="text-center">
              <h4 className="text-xl font-semibold">Relax & Get a call</h4>
              <p className="text-base font-medium">
                Basis on review, rating & analytical data we get best vendors
                for you
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-out-left"
            className="group flex w-[28%] cursor-pointer flex-col items-center gap-5 rounded-lg px-5 py-10 shadow-xl duration-300 ease-in-out hover:scale-[1.1]"
          >
            <Image
              className="h-[120px] w-[120px] group-hover:animate-customBouns"
              src="/icon3.png"
            />

            <div className="text-center">
              <h4 className="text-xl font-semibold">
                Confirm Order & Celebrate
              </h4>
              <p className="text-base font-medium">
                Confirm order and focus on celebration
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default HowWorks;
