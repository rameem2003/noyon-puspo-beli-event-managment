import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import AOS from "aos";
import "aos/dist/aos.css";
import List from "../components/common/List";
import ListItem from "../components/common/ListItem";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <section className="bg-banner bg-cover bg-bottom bg-no-repeat py-[200px]">
        <Container>
          <Flex className="items-center gap-10">
            <div data-aos="fade-right" className="w-1/2">
              <h1 className="font-extrabold leading-[60px] text-white xl:text-4xl 2xl:text-5xl">
                Contact with us
              </h1>

              <p className="mt-5 text-lg font-medium text-white">
                We are ready for your event
              </p>
            </div>
          </Flex>
        </Container>
      </section>

      <section className="my-20">
        <Container>
          <Flex className="items-center">
            <div className="w-6/12">
              <h2 className="mb-10 text-2xl font-semibold text-black">
                Support
              </h2>

              <div className="">
                <p className="text-lg font-semibold text-black">
                  Contact us for any kind of support 24/7.
                </p>
                <p className="text-base font-normal text-black">
                  +8801743612520
                </p>
                <p className="text-base font-normal text-black">
                  noyonpushpobelieventmanagement@gmail.com
                </p>

                <div className="mt-5">
                  <p className="text-lg font-semibold text-black">Address</p>
                  <p className="text-base font-normal text-black">
                    Mirpur-10, Porbota Tower(Ground Floor),Beside Exim
                    Bank,Metrorail Piller No- 250, Begum Rokeya
                    Sharani, Dhaka-1216
                  </p>
                </div>

                <Flex className="mt-5">
                  <List className="flex items-center gap-5">
                    <ListItem>
                      <a
                        className="text-2xl text-black"
                        target="_blank"
                        href="https://www.facebook.com/FlowerAndDecorationService?mibextid=LQQJ4d"
                      >
                        <FaFacebook />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        className="text-3xl text-black"
                        target="_blank"
                        href="http://wa.me/8801743612520"
                      >
                        <IoLogoWhatsapp />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        className="text-3xl text-black"
                        target="_blank"
                        href="https://www.instagram.com/bdeve_nt?igsh=MmE0N3B0aGVrNTd4&utm_source=qr"
                      >
                        <AiFillInstagram />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        className="text-3xl text-black"
                        target="_blank"
                        href="https://youtube.com/@noyonpushpobeli-eventmanag3809?si=TetEAbFE0bOe8Hmb"
                      >
                        <FaYoutube />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        className="text-3xl text-black"
                        target="_blank"
                        href="https://www.tiktok.com/@noyon.pushpo.beli?_t=8ra2hJevlLU&_r=1"
                      >
                        <AiFillTikTok />
                      </a>
                    </ListItem>
                  </List>
                </Flex>
              </div>
            </div>

            <div className="w-6/12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228.1466809320758!2d90.36918775932834!3d23.806260561933815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1016c7079e5%3A0xcb8d3e137aa78f13!2z4Kao4Kav4Ka84KaoIOCmquCngeCmt-CnjeCmqiDgpqzgp4fgprLgpr8t4KaH4Kat4KeH4Kao4KeN4KafIOCmruCnjeCmr-CmvuCmqOCnh-CmnOCmruCnh-CmqOCnjeCmnw!5e0!3m2!1sbn!2sbd!4v1732335868912!5m2!1sbn!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Flex>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
