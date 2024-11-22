import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import { FaDotCircle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <Container>
        <h2 className="text-center font-bold uppercase text-white xl:text-3xl">
          Contact Us
        </h2>

        <h2 className="mt-5 text-center font-extrabold text-white xl:text-5xl">
          +8801743612520
        </h2>

        <Flex className="mt-10 gap-5">
          <div className="w-3/12">
            <Image
              className="h-[200px] w-[200px]"
              src="/footerlogo.png"
              alt="logo"
            />

            <div className="mt-5">
              <p className="text-justify text-lg font-medium text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                sed exercitationem optio distinctio! Dignissimos earum quasi
                nobis soluta nostrum, deserunt
              </p>
            </div>
          </div>
          <div className="w-3/12">
            <h2 className="mb-10 text-2xl font-semibold text-white">
              Our Sevices
            </h2>

            <List>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <FaDotCircle />
                <span>Event Decoration</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <FaDotCircle />
                <span>Decorator</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <FaDotCircle />
                <span>Sound & Lighting</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <FaDotCircle />
                <span>Vehicle</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <FaDotCircle />
                <span>Photography & Cinematography</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <FaDotCircle />
                <span>Entertainment</span>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <FaDotCircle />
                <span>Music, Sound System and Band show</span>
              </ListItem>
            </List>
          </div>
          <div className="w-2/12">
            <h2 className="mb-10 text-2xl font-semibold text-white">
              Visit us
            </h2>

            <List>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <Link to="/">Event Decoration</Link>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <Link to="/">Decorator</Link>
              </ListItem>
              <ListItem className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                <Link to="/">Sound & Lighting</Link>
              </ListItem>
            </List>
          </div>
          <div className="w-4/12">
            <h2 className="mb-10 text-2xl font-semibold text-white">Support</h2>

            <div className="">
              <p className="text-lg font-semibold text-white">
                Contact us for any kind of support 24/7.
              </p>
              <p className="text-base font-normal text-white">+8804544848484</p>
              <p className="text-base font-normal text-white">
                letstalk@utshob.xyz
              </p>

              <div className="mt-5">
                <p className="text-lg font-semibold text-white">Address</p>
                <p className="text-base font-normal text-white">
                  Rojonigondha, 105/7, Mohakhali Dakkhinpara, Banani, Dhaka
                  -1212
                </p>
              </div>

              <Flex className="mt-5">
                <List className="flex items-center gap-5">
                  <ListItem>
                    <a className="text-2xl text-white" href="http://">
                      <FaFacebook />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a className="text-2xl text-white" href="http://">
                      <FaFacebook />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a className="text-2xl text-white" href="http://">
                      <FaFacebook />
                    </a>
                  </ListItem>
                </List>
              </Flex>
            </div>
          </div>
        </Flex>

        <div className="mt-5 text-center">
          <a
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
