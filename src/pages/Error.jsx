import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import AOS from "aos";
import Image from "../components/common/Image";
import "aos/dist/aos.css";

const Error = () => {
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
      <section className="bg-banner bg-cover bg-bottom bg-no-repeat py-[100px] 2xl:py-[200px]">
        <Container>
          <Flex className="items-center gap-10">
            <div data-aos="fade-right" className="w-full lg:w-1/2">
              <h1 className="text-4xl font-extrabold leading-[60px] text-white 2xl:text-5xl">
                Opps !!!!
              </h1>

              <p className="mt-5 text-lg font-medium text-white">
                We Provide Budget Friendly Event Packages
              </p>
            </div>
          </Flex>
        </Container>
      </section>

      <Image src="/notfound.png" alt="not found" className="mx-auto w-[40%]" />
    </main>
  );
};

export default Error;
