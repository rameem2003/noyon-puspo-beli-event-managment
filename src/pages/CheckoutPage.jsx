import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { districts } from "./../assets/data/districts";
import { FaArrowRight } from "react-icons/fa";

const CheckoutPage = () => {
  const location = useLocation();
  const { item } = location.state;
  console.log(location);

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
                Let's Finalize Your Plan
              </h1>

              <p className="mt-5 text-lg font-medium text-white">
                We Provide Budget Friendly Event Packages
              </p>
            </div>
          </Flex>
        </Container>
      </section>

      <section className="my-20">
        <Container>
          <Flex className="gap-5">
            <div className="w-1/2">
              <h3 className="mb-5 text-4xl font-bold text-primary">
                Provide Your Information
              </h3>

              <form action="">
                <div class="relative mb-5">
                  <input
                    type="text"
                    id="floating_filled"
                    class="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="floating_filled"
                    class="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                  >
                    Your Full Name
                  </label>
                </div>

                <div class="relative mb-5">
                  <input
                    type="text"
                    id="floating_filled"
                    class="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="floating_filled"
                    class="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                  >
                    Your Phone Number
                  </label>
                </div>

                <div class="relative mb-5">
                  <input
                    type="text"
                    id="floating_filled"
                    class="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="floating_filled"
                    class="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                  >
                    Your Address
                  </label>
                </div>

                <div className="mb-5">
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-primary focus:border-gray-200 focus:outline-none focus:ring-0"
                  >
                    <option disabled>District</option>
                    {districts.map((d, i) => (
                      <option value={d} key={i}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-10 py-3 text-center text-sm font-semibold text-white duration-300 ease-in-out hover:gap-4 xl:text-base 2xl:text-lg"
                >
                  Place Order <FaArrowRight />
                </button>
              </form>
            </div>
            <div className="w-1/2">
              <h3 className="mb-5 text-4xl font-bold text-primary">
                Your Chosen Package
              </h3>
              <div
                className={`group mb-8 w-full rounded-lg border-2 ${item.color} w-full bg-white p-6 shadow-md duration-300 ease-in-out`}
              >
                <h2
                  className={`text-2xl font-bold ${item.textColor} group-hover:text-white`}
                >
                  {item.name} ({item.packageID})
                </h2>

                <h3
                  className={`text-2xl font-extrabold ${item.textColor} group-hover:text-white`}
                >
                  {item.price}
                </h3>

                <p className="mt-4 text-lg font-medium group-hover:text-white">
                  What’s included:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                  {item.features.map((d, i) => (
                    <li key={i} className="text-black group-hover:text-white">
                      ➡ {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </main>
  );
};

export default CheckoutPage;
