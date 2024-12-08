import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      <section className="bg-banner bg-cover bg-bottom bg-no-repeat py-[150px] xl:py-[200px]">
        <Container>
          <Flex className="items-center gap-10">
            <div data-aos="fade-right" className="w-full lg:w-1/2">
              <h1 className="text-4xl font-extrabold leading-[60px] text-white 2xl:text-5xl">
                About us
              </h1>

              <p className="mt-5 text-lg font-medium text-white">
                Your Vision, Our Expertise
              </p>
            </div>
          </Flex>
        </Container>
      </section>

      <Container>
        <div className="mx-auto py-12">
          {/* Expertise Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Our Expertise
            </h2>
            <p className="text-lg leading-relaxed">
              At <strong>noyon puspo beli event management</strong>, we bring{" "}
              <strong>15 years of industry experience</strong> to every project.
              Whether it's a wedding, corporate event, or social celebration,
              our team is dedicated to making your dreams a reality.
              <strong>Every event is crafted</strong> with care, precision, and
              creativity to reflect your unique personality and style.
            </p>
          </section>
          {/* Services Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Our Services
            </h2>
            <ul className="list-disc space-y-4 pl-6 text-lg">
              <li>
                <strong>Wedding Perfection:</strong>
                Let us make your wedding day unforgettable with seamless
                planning. From venue selection to decor, catering, and
                entertainment, we ensure every moment feels magical.
              </li>
              <li>
                <strong>Corporate Brilliance:</strong>
                Need a professional touch? We excel in organizing corporate
                events, conferences, and seminars that leave a lasting
                impression on your attendees.
              </li>
              <li>
                <strong>Social Celebrations:</strong>
                Birthdays, anniversaries, themed parties—we create vibrant
                atmospheres where your guests can celebrate and make
                unforgettable memories.
              </li>
              <li>
                <strong>Event Consultation:</strong>
                Planning your event but need expert guidance? Our consultants
                provide valuable insights and practical tips to help you plan
                like a pro.
              </li>
            </ul>
          </section>
          {/* Why Choose Us Section */}
          <section>
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Why Choose Us?
            </h2>
            <ul className="list-disc space-y-4 pl-6 text-lg">
              <li>
                <strong>Creative Vision:</strong>
                Our unique and imaginative approach ensures every event stands
                out.
              </li>
              <li>
                <strong>Meticulous Attention:</strong>
                We focus on every detail, from stunning floral arrangements to
                impeccable table settings.
              </li>
              <li>
                <strong>Stress-Free Planning:</strong>
                Sit back and relax! Our team takes care of logistics, so you can
                enjoy the experience.
              </li>
              <li>
                <strong>Trusted Vendors:</strong>
                Benefit from our extensive network of reliable vendors for
                top-quality services at the best prices.
              </li>
              <li>
                <strong>Budget-Friendly Solutions:</strong>
                We design packages that provide the best value for your
                investment without compromising quality.
              </li>
            </ul>
          </section>
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-lg border-[3px] border-black px-10 py-3 text-sm font-semibold text-black duration-300 ease-in-out hover:gap-4 hover:border-primary hover:bg-primary hover:text-white xl:text-base 2xl:text-lg"
            >
              Contact us <FaArrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default About;
