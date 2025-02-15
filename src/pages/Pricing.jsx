import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import { packages } from "../assets/data/packages";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushBooking } from "../redux/features/BookingSlice";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "./../components/common/Image";
const Pricing = () => {
  const dispatch = useDispatch(); // dispatch instance
  const navigate = useNavigate(); // navigate instance
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // function for set the package for booking
  const bookNow = (item) => {
    dispatch(pushBooking(item));
    navigate("/checkout");
    console.log(item);
  };

  return (
    <main>
      <section className="bg-banner bg-cover bg-bottom bg-no-repeat py-[150px] 2xl:py-[200px]">
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

            <Flex className="mt-5 flex-wrap justify-between gap-5">
              {packages.generalPool.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className={`group mb-8 w-full rounded-lg border-2 ${item.color} bg-white p-6 shadow-md duration-300 ease-in-out sm:w-[48%] lg:w-[30%] xl:w-[23%]`}
                >
                  <h2
                    className={`text-2xl font-bold ${item.textColor} group-hover:text-white`}
                  >
                    {item.name}
                  </h2>

                  <h3
                    className={`text-2xl font-extrabold ${item.textColor} group-hover:text-white`}
                  >
                    {item.price}
                  </h3>

                  <button
                    onClick={() => bookNow(item)}
                    className={`my-2 w-full rounded-md border-[2px] border-white ${item.button} p-3 text-xl font-semibold text-white`}
                  >
                    Book Now
                  </button>

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
              ))}
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

            <Flex className="mt-5 flex-wrap gap-5">
              {packages.music_and_band_concert.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className={`group mb-8 w-full rounded-lg border-2 ${item.color} bg-white p-6 shadow-md duration-300 ease-in-out sm:w-[48%] lg:w-[30%] xl:w-[23%]`}
                >
                  <h2
                    className={`text-2xl font-bold ${item.textColor} group-hover:text-white`}
                  >
                    {item.name}
                  </h2>

                  <h3
                    className={`text-2xl font-extrabold ${item.textColor} group-hover:text-white`}
                  >
                    {item.price}
                  </h3>

                  <button
                    onClick={() => bookNow(item)}
                    className={`my-2 w-full rounded-md border-[2px] border-white ${item.button} p-3 text-xl font-semibold text-white`}
                  >
                    Book Now
                  </button>

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
              ))}
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
              {packages.birthday_event_decoration.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className={`group mb-8 w-full rounded-lg border-2 ${item.color} bg-white p-6 shadow-md duration-300 ease-in-out sm:w-[48%] lg:w-[30%] xl:w-[23%]`}
                >
                  <h2
                    className={`text-2xl font-bold ${item.textColor} group-hover:text-white`}
                  >
                    {item.name}
                  </h2>

                  <h3
                    className={`text-2xl font-extrabold ${item.textColor} group-hover:text-white`}
                  >
                    {item.price}
                  </h3>

                  <button
                    onClick={() => bookNow(item)}
                    className={`my-2 w-full rounded-md border-[2px] border-white ${item.button} p-3 text-xl font-semibold text-white`}
                  >
                    Book Now
                  </button>

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
              ))}
            </Flex>
          </div>

          <div className="container mx-auto px-4 py-8">
            <h3 className="my-5 text-center text-5xl font-bold text-primary">
              Living Room Decoration
            </h3>

            <p className="mt-4 text-center text-xl font-medium text-black">
              Celebrate the beginning of a new journey with a living room décor
              that exudes charm, elegance, and personalized beauty.
            </p>

            <div className="my-5 rounded-lg border bg-gray-100 p-6 shadow-md">
              <p className="text-lg font-semibold text-red-500">🌺 Note:</p>
              <p className="mt-2 text-lg">
                All are available only Dhaka, Mirpur city! If you customised the
                decoration, extra price will be charged !
              </p>

              <p className="mt-2 text-lg">
                If there is no lift, we provide service up to the maximum 2
                floor house. If the house is above 2 floors, additional labor
                charges will have to be paid.
              </p>
            </div>

            <Flex className="mt-5 flex-wrap gap-5">
              {packages.living_room_decoration.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className={`group mb-8 w-full rounded-lg border-2 ${item.color} bg-white p-6 shadow-md duration-300 ease-in-out sm:w-[48%] lg:w-[30%] xl:w-[23%]`}
                >
                  <Image
                    className="mb-5 h-[200px] w-full rounded-md"
                    src={item.thumb}
                    alt={item.thumb}
                  />
                  <h2
                    className={`text-2xl font-bold ${item.textColor} capitalize group-hover:text-white`}
                  >
                    {item.name}
                  </h2>

                  <p
                    className={`text-xl font-bold ${item.textColor} capitalize group-hover:text-white`}
                  >
                    {item.title}
                  </p>

                  <h3
                    className={`text-2xl font-extrabold ${item.textColor} capitalize group-hover:text-white`}
                  >
                    {item.price}
                  </h3>

                  <button
                    onClick={() => bookNow(item)}
                    className={`my-2 w-full rounded-md border-[2px] border-white capitalize ${item.button} p-3 text-xl font-semibold text-white`}
                  >
                    Book Now
                  </button>

                  <p className="mt-4 text-lg font-medium capitalize group-hover:text-white">
                    What’s included:
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                    {item.features.map((d, i) => (
                      <li
                        key={i}
                        className="capitalize text-black group-hover:text-white"
                      >
                        ➡ {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Flex>
          </div>

          <div className="container mx-auto px-4 py-8">
            <h3 className="my-5 text-center text-5xl font-bold text-primary">
              Car Decoration
            </h3>

            <p className="mt-4 text-center text-xl font-medium text-black">
              Transform your ride into a stunning spectacle with our custom car
              decorations – vibrant flowers, elegant ribbons, and more to make
              every journey special!
            </p>

            <div className="my-5 rounded-lg border bg-gray-100 p-6 shadow-md">
              <p className="text-lg font-semibold text-red-500">🌺 Note:</p>
              <p className="mt-2 text-lg">
                We provide car decoration services only within Mirpur, Dhaka
                City.
              </p>

              <p className="mt-2 text-lg">
                No car provide. If you customised the decoration by extra flower
                or anything, Extra cost will be charged!
              </p>

              <p className="mt-2 text-lg">
                These are fresh flowers, so they won’t stay fresh for more than
                6-7 hours. So, here are the tips for decorating the car at the
                perfect time. This is our small suggestions for car
                decoration accordingly.
              </p>
            </div>

            <Flex className="mt-5 flex-wrap gap-5">
              {packages.car_decoration.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className={`group mb-8 w-full rounded-lg border-2 ${item.color} bg-white p-6 shadow-md duration-300 ease-in-out sm:w-[48%] lg:w-[30%] xl:w-[23%]`}
                >
                  <Image
                    className="mb-5 h-[200px] w-full rounded-md"
                    src={item.thumb}
                    alt={item.thumb}
                  />
                  <h2
                    className={`text-2xl font-bold ${item.textColor} capitalize group-hover:text-white`}
                  >
                    {item.name}
                  </h2>

                  <p
                    className={`text-xl font-bold ${item.textColor} capitalize group-hover:text-white`}
                  >
                    {item.title}
                  </p>

                  <h3
                    className={`text-2xl font-extrabold ${item.textColor} capitalize group-hover:text-white`}
                  >
                    {item.price}
                  </h3>

                  <button
                    onClick={() => bookNow(item)}
                    className={`my-2 w-full rounded-md border-[2px] border-white capitalize ${item.button} p-3 text-xl font-semibold text-white`}
                  >
                    Book Now
                  </button>

                  <p className="mt-4 text-lg font-medium capitalize group-hover:text-white">
                    What’s included:
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                    {item.features.map((d, i) => (
                      <li
                        key={i}
                        className="capitalize text-black group-hover:text-white"
                      >
                        ➡ {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Flex>
          </div>

          <div className="my-5 rounded-lg border bg-gray-100 p-6 shadow-md">
            <p className="text-lg font-semibold capitalize text-red-500">
              🌺 Note:
            </p>
            <p className="mt-2 text-lg capitalize">
              This offer is valid for a limited time and is applicable for
              specific slots only. The offer will remain until all slots are
              booked.
            </p>
          </div>

          <div className="container mx-auto rounded-lg bg-gray-200 px-4 py-8 capitalize shadow-md">
            <h2 className="text-2xl font-bold capitalize text-gray-800">
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
