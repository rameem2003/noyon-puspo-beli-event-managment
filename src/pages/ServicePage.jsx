import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import Image from "../components/common/Image";
import { services } from "../assets/data/services";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicePage = () => {
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
                Our Services
              </h1>

              <p className="mt-5 text-lg font-medium text-white">
                Explore Our Wide Range of Services
              </p>
            </div>
          </Flex>
        </Container>
      </section>

      <Container>
        <Flex className="mt-10 flex-wrap items-center justify-between">
          {services.map((data, i) => (
            <div
              data-aos="zoom-in-down"
              className="group relative mx-auto mb-10 h-[280px] w-full overflow-hidden rounded-lg shadow-xl duration-300 ease-in-out sm:w-[80%] md:w-[48%] xl:w-[32%]"
            >
              <Image
                src={data.thumb}
                alt={data.title}
                className="h-full w-full"
              />

              <div className="absolute left-0 top-0 flex h-0 w-full items-center justify-center bg-primary/80 duration-300 ease-in-out group-hover:h-full">
                <div className="duration-300 ease-in-out">
                  <h3 className="scale-0 text-center text-4xl font-bold text-white duration-300 ease-in-out group-hover:scale-100">
                    {data.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Flex>
      </Container>
    </main>
  );
};

export default ServicePage;
