import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import {
  FaDotCircle,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <Container>
        <h2 className="text-center text-xl font-bold uppercase text-white xl:text-3xl">
          Contact Us
        </h2>

        <h2 className="mt-5 text-center text-3xl font-extrabold text-white xl:text-5xl">
          +8801743612520
        </h2>

        <Flex className="mt-10 flex-col flex-wrap gap-5 md:flex-row lg:flex-nowrap">
          <div className="w-full md:w-[48%] xl:w-3/12">
            <Image
              className="mx-auto h-[200px] w-[200px] md:ml-0"
              src="/footerlogo.png"
              alt="logo"
            />

            <div className="mt-5">
              <p className="text-justify text-lg font-medium text-white">
                At noyon puspo beli event management, we bring 15 years of
                industry experience to every project. Every event is crafted
                with care, precision, and creativity to reflect your unique
                personality and style
              </p>
            </div>
          </div>
          <div className="w-full md:w-[48%] xl:w-3/12">
            <h2 className="mb-10 text-2xl font-semibold text-white">
              Our Sevices
            </h2>

            <List>
              <ListItem className="mb-2 flex items-center gap-1 text-sm font-semibold text-white xl:text-base">
                <FaDotCircle />
                <span>Event Decoration</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-sm font-semibold text-white xl:text-base">
                <FaDotCircle />
                <span>Decorator</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-sm font-semibold text-white xl:text-base">
                <FaDotCircle />
                <span>Sound & Lighting</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-sm font-semibold text-white xl:text-base">
                <FaDotCircle />
                <span>Vehicle</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-sm font-semibold text-white xl:text-base">
                <FaDotCircle />
                <span>Photography & Cinematography</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-sm font-semibold text-white xl:text-base">
                <FaDotCircle />
                <span>Entertainment</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-sm font-semibold text-white xl:text-base">
                <FaDotCircle />
                <span>Music, Sound System and Band show</span>
              </ListItem>
            </List>
          </div>
          <div className="w-full md:w-[48%] xl:w-2/12">
            <h2 className="mb-10 text-2xl font-semibold text-white">
              Visit us
            </h2>

            <List>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <Link to="/about">About</Link>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <Link to="/services">Services</Link>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <Link to="/events">Recent Events</Link>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <Link to="/bridalspecial">Bridal Special</Link>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <Link to="/pricing">Pricing</Link>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <Link to="/contact">Contact</Link>
              </ListItem>
            </List>
          </div>
          <div className="w-full md:w-[48%] xl:w-4/12">
            <h2 className="mb-10 text-2xl font-semibold text-white">Support</h2>

            <div className="">
              <p className="text-lg font-semibold text-white">
                Contact us for any kind of support 24/7.
              </p>
              <p className="text-base font-normal text-white">+8801743612520</p>

              <div className="mt-5">
                <p className="text-lg font-semibold text-white">Address</p>
                <p className="text-base font-normal text-white">
                  Mirpur-10, Porbota Tower(Ground Floor),Beside Exim
                  Bank,Metrorail Piller No- 250, Begum Rokeya
                  Sharani, Dhaka-1216
                </p>
              </div>

              <Flex className="mt-5">
                <List className="flex items-center gap-5">
                  <ListItem>
                    <a
                      className="text-3xl text-white"
                      target="_blank"
                      href="mailto:noyonpushpobelieventmanagement@gmail.com"
                    >
                      <IoMdMail />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      className="text-2xl text-white"
                      target="_blank"
                      href="https://www.facebook.com/FlowerAndDecorationService?mibextid=LQQJ4d"
                    >
                      <FaFacebook />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      className="text-3xl text-white"
                      target="_blank"
                      href="http://wa.me/8801743612520"
                    >
                      <IoLogoWhatsapp />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      className="text-3xl text-white"
                      target="_blank"
                      href="https://www.instagram.com/bdeve_nt?igsh=MmE0N3B0aGVrNTd4&utm_source=qr"
                    >
                      <AiFillInstagram />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      className="text-3xl text-white"
                      target="_blank"
                      href="https://youtube.com/@noyonpushpobeli-eventmanag3809?si=TetEAbFE0bOe8Hmb"
                    >
                      <FaYoutube />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      className="text-3xl text-white"
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
        </Flex>

        <div className="mt-5 text-center">
          <a
            target="_blank"
            className="text-white"
            href="https://www.facebook.com/rolstudiobangladesh"
          >
            &copy; Developed by Mahmood Hassan Rameem || ROL Studio || 2024
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
