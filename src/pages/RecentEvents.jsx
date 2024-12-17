import React, { useEffect, useState } from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import ReactPlayer from "react-player";
import { events } from "../assets/data/services";
import { FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const RecentEvents = () => {
  const [vedio, setVedio] = useState("");
  const [playVedio, setPlayVedio] = useState(false);

  console.log(vedio);

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
                Recent Events
              </h1>

              <p className="mt-5 text-lg font-medium text-white">
                We have earned the trust from several organization due to our
                great attention to work and experience.
              </p>
            </div>
          </Flex>
        </Container>
      </section>
      <section className="my-10">
        <Container>
          <h2 className="mb-5 text-2xl font-bold leading-[40px] text-primary 2xl:text-3xl">
            Spotlight on Memories: Our Event Highlights
          </h2>

          <Flex className="mt-10 flex-wrap items-center justify-between">
            {events.map((data, i) => (
              <div
                onClick={() => {
                  setVedio(data.track);
                  setPlayVedio(true);
                }}
                key={i}
                data-aos="zoom-in-down"
                className="group relative mx-auto mb-10 h-full w-full overflow-hidden rounded-lg shadow-xl duration-300 ease-in-out sm:w-[80%] md:w-[48%] lg:h-[280px] xl:w-[32%]"
              >
                {/* <Image src={data.img} alt={data.id} className="h-full w-full" /> */}

                <ReactPlayer url={data.track} width="100%" height="100%" />

                <div className="absolute bottom-0 left-0 h-[80px] w-full bg-primary/90">
                  <h3 className="p-2 text-base font-bold text-white duration-300 ease-in-out">
                    {data.details.slice(0, 120)}....
                  </h3>
                </div>
              </div>
            ))}
          </Flex>
        </Container>
      </section>

      {playVedio && (
        <div className="fixed left-0 top-0 z-[99999999999999] flex h-screen w-full items-center justify-center bg-black/90">
          <FaTimes
            className="absolute right-4 top-4 cursor-pointer text-[30px] text-white"
            onClick={() => setPlayVedio(false)}
          />

          <ReactPlayer url={vedio} controls={true} playing={true} />
        </div>
      )}
    </main>
  );
};

export default RecentEvents;
