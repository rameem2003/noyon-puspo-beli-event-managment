import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import AOS from "aos";
import "aos/dist/aos.css";
const Pricing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <section className="bg-banner bg-cover bg-bottom bg-no-repeat py-[150px] xl:py-[200px]">
        <Container>
          <Flex className="items-center gap-10">
            <div data-aos="fade-right" className="w-full lg:w-1/2">
              <h1 className="text-4xl font-extrabold leading-[60px] text-white 2xl:text-5xl">
                Event Packages
              </h1>

              <p className="mt-5 text-lg font-medium text-white">
                We Provide Budget Friendly Event Packages
              </p>
            </div>
          </Flex>
        </Container>
      </section>

      <Container>
        <section className="py-12">
          <div className="container mx-auto px-4 py-8">
            <h3 className="my-5 text-center text-5xl font-bold text-primary">
              General Pool
            </h3>
            <p className="mt-4 text-center text-xl font-medium text-black">
              Why wait? Choose your preferred package now!
            </p>

            <Flex className="mt-5 flex-wrap gap-5 xl:flex-nowrap">
              {/* Package 1 */}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="group mb-8 w-full rounded-lg border-2 border-green-400 bg-white p-6 shadow-md duration-300 ease-in-out hover:bg-green-600 sm:w-[48%] lg:w-[30%] xl:w-[25%]"
              >
                <h2 className="text-2xl font-bold text-green-600 group-hover:text-white">
                  🟩 Package 1:
                </h2>

                <h3 className="text-2xl font-extrabold text-green-600 group-hover:text-white">
                  14,800 BDT
                </h3>

                <p className="mt-4 text-lg font-medium group-hover:text-white">
                  What’s included:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                  <li className="text-black group-hover:text-white">
                    ➡ A stage design
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Stage sofa
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Stage carpet
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Entry gate
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Proper lighting
                  </li>
                </ul>
              </div>
              {/* Package 2 */}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="group mb-8 w-full rounded-lg border-2 border-red-400 bg-white p-6 shadow-md duration-300 ease-in-out hover:bg-red-600 sm:w-[48%] lg:w-[30%] xl:w-[25%]"
              >
                <h2 className="text-2xl font-bold text-red-600 group-hover:text-white">
                  🟥 Package 2:
                </h2>
                <h3 className="text-2xl font-extrabold text-red-600 group-hover:text-white">
                  24,500 BDT
                </h3>
                <p className="mt-4 text-lg font-medium group-hover:text-white">
                  What’s included:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                  <li className="text-black group-hover:text-white">
                    ➡ A stage design
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Stage sofa
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Stage carpet
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Entry gate
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Photobooth
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Proper lighting
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Walkway carpet (30 ft)
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Welcome banner
                  </li>
                </ul>
              </div>
              {/* Package 3 */}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="group mb-8 w-full rounded-lg border-2 border-yellow-400 bg-white p-6 shadow-md duration-300 ease-in-out hover:bg-yellow-600 sm:w-[48%] lg:w-[30%] xl:w-[25%]"
              >
                <h2 className="text-2xl font-bold text-yellow-600 group-hover:text-white">
                  🟨 Package 3:
                </h2>
                <h3 className="text-2xl font-extrabold text-yellow-600 group-hover:text-white">
                  39,500 BDT
                </h3>
                <p className="mt-4 text-lg font-medium group-hover:text-white">
                  What’s included:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                  <li className="text-black group-hover:text-white">
                    ➡ A stage design
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Stage sofa
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Stage carpet
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Entry gate
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Photobooth
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Walkway carpet + decoration (50 ft)
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Welcome banner
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Proper lighting
                  </li>
                </ul>
              </div>
              {/* Package 4 */}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="group mb-8 w-full rounded-lg border-2 border-orange-400 bg-white p-6 shadow-md duration-300 ease-in-out hover:bg-orange-600 sm:w-[48%] lg:w-[30%] xl:w-[25%]"
              >
                <h2 className="text-2xl font-bold text-orange-600 group-hover:text-white">
                  🟧 Package 4:
                </h2>
                <h3 className="text-2xl font-extrabold text-orange-600 group-hover:text-white">
                  59,500 BDT
                </h3>
                <p className="mt-4 text-lg font-medium group-hover:text-white">
                  What’s included:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                  <li className="text-black group-hover:text-white">
                    ➡ A stage design
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Stage sofa
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Stage carpet/PVC flooring
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Entry gate
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Photobooth
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Stage ceiling
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Walkway carpet + decoration (50 ft)
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Welcome banner
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Flower shower
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Proper lighting
                  </li>
                </ul>
              </div>
            </Flex>
          </div>

          <div className="container mx-auto px-4 py-8">
            <h3 className="my-5 text-center text-5xl font-bold text-primary">
              Music and Band Concert
            </h3>

            <p className="mt-4 text-center text-xl font-medium text-black">
              Make your party outstanding with our attractive packages!
            </p>

            <div className="my-5 rounded-lg border bg-gray-100 p-6 shadow-md">
              <p className="text-lg font-semibold text-red-500">🌺 Note:</p>
              <p className="mt-2 text-lg">
                (All of are Inside dhaka) Outside Payable by address
              </p>
            </div>

            <Flex className="mt-5 flex-wrap gap-5 xl:flex-nowrap">
              {/* Package 1 */}

              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="group mb-8 w-full rounded-lg border-2 border-green-400 bg-white p-6 shadow-md duration-300 ease-in-out hover:bg-green-600 sm:w-[48%] lg:w-[30%] xl:w-[25%]"
              >
                <h2 className="text-2xl font-bold text-green-600 group-hover:text-white">
                  🟩 Music Band show :
                </h2>

                <h3 className="text-2xl font-extrabold text-green-600 group-hover:text-white">
                  39,499 BDT
                </h3>

                <p className="mt-4 text-lg font-medium group-hover:text-white">
                  What’s included:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                  <li className="text-black group-hover:text-white">
                    🔊 2 pair out
                  </li>
                  <li className="text-black group-hover:text-white">
                    🎙️ 2 pair monitor
                  </li>
                  <li className="text-black group-hover:text-white">
                    💡 2 setup pargoan lights
                  </li>
                  <li className="text-black group-hover:text-white">
                    🌫️ Smoke machine
                  </li>
                  <li className="text-black group-hover:text-white">
                    🥁 Drums setup
                  </li>
                  <li className="text-black group-hover:text-white">
                    🎸 Bassiem
                  </li>
                  <li className="text-black group-hover:text-white">
                    🎸 Leadium
                  </li>
                  <li className="text-black group-hover:text-white">
                    🎤 Unlimited microphones
                  </li>
                  <li className="text-black group-hover:text-white">
                    🔌 Unlimited guitar cables
                  </li>
                  <li className="text-black group-hover:text-white">
                    🔌 Unlimited short cables
                  </li>
                </ul>
              </div>

              {/* Package 2 */}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="group mb-8 w-full rounded-lg border-2 border-blue-400 bg-white p-6 shadow-md duration-300 ease-in-out hover:bg-blue-600 sm:w-[48%] lg:w-[30%] xl:w-[25%]"
              >
                <h2 className="text-2xl font-bold text-blue-600 group-hover:text-white">
                  🟦 Kawali Music Band Show:
                </h2>

                <h3 className="text-2xl font-extrabold text-blue-600 group-hover:text-white">
                  44,499 BDT
                </h3>

                <p className="mt-4 text-lg font-medium group-hover:text-white">
                  What’s included:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                  <li className="text-black group-hover:text-white">
                    🔊 2 Pair Sound
                  </li>
                  <li className="text-black group-hover:text-white">
                    🎙️ 2 Pair Monitor
                  </li>
                  <li className="text-black group-hover:text-white">
                    🎤 Unlimited Microphones
                  </li>
                  <li className="text-black group-hover:text-white">
                    🔌 Unlimited Short Cables
                  </li>
                  <li className="text-black group-hover:text-white">
                    🎹 Unlimited Keyboard Cables
                  </li>
                </ul>
              </div>
            </Flex>
          </div>

          <div className="container mx-auto px-4 py-8">
            <h3 className="my-5 text-center text-5xl font-bold text-primary">
              Birthday Event Decoration
            </h3>

            <p className="mt-4 text-center text-xl font-medium text-black">
              Make your birthday celebrations unforgettable with our creative
              decorations!
            </p>

            <Flex className="mt-5 flex-wrap gap-5 xl:flex-nowrap">
              {/* Package 1 */}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="group mb-8 w-full rounded-lg border-2 border-green-400 bg-white p-6 shadow-md duration-300 ease-in-out hover:bg-green-600 sm:w-[48%] lg:w-[30%] xl:w-[25%]"
              >
                <h2 className="text-2xl font-bold text-green-600 group-hover:text-white">
                  🟩 Package 1:
                </h2>

                <h3 className="text-2xl font-extrabold text-green-600 group-hover:text-white">
                  6,000 BDT up to 40,499 BDT
                </h3>

                <p className="mt-4 text-lg font-medium group-hover:text-white">
                  What’s included:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                  <li className="text-black group-hover:text-white">
                    ➡ Balloon Decorations
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Letter Balloons
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Prices are based on the design complexity.
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Customization options available to suit your preferences.
                  </li>
                  <li className="text-black group-hover:text-white">
                    ➡ Service available inside Dhaka City.
                  </li>
                </ul>
              </div>
            </Flex>
          </div>

          <div className="my-5 rounded-lg border bg-gray-100 p-6 shadow-md">
            <p className="text-lg font-semibold text-red-500">🌺 Note:</p>
            <p className="mt-2 text-lg">
              This offer is valid for a limited time and is applicable for
              specific slots only. The offer will remain until all slots are
              booked.
            </p>
          </div>

          <div className="container mx-auto rounded-lg bg-gray-200 px-4 py-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">
              📌 Terms and Conditions:
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
              <li>This offer is applicable only within Dhaka City.</li>
              <li>Hall charges or VAT are not included in the package.</li>
              <li>Platform arrangements are not included in the package.</li>
              <li>
                For programs on rooftops or above the second floor without lift
                access, additional labor costs will apply.
              </li>
              <li>Prices may vary if the package is customized.</li>
              <li>
                For programs outside Dhaka City, transport and labor costs will
                be added.
              </li>
              <li>
                A minimum of 25% advance payment is required to confirm the
                booking.
              </li>
            </ul>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Pricing;
