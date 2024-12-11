import React, { useEffect, useState } from "react";
import Container from "./../common/Container";
import Flex from "./../common/Flex";
import Image from "./../common/Image";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);

    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     menuRef.current.contains(e.target) ? setToggle(true) : setToggle(false);
  //     popupRef.current.contains(e.target) ? setPopup(true) : setPopup(false);
  //   });
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${scrolled ? "bg-black py-2" : "bg-transparent py-6"} fixed left-0 top-0 z-[99999999] w-full duration-300 ease-in-out`}
    >
      <Container>
        <Flex className="items-center justify-between">
          <div className="w-full lg:w-4/12">
            <Flex className="items-center justify-between">
              <Link to="/">
                <Image src="/logo.jpg" className="h-[80px] w-[80px]" />
              </Link>

              <div className="block lg:hidden">
                {toggle ? (
                  <FaTimes
                    className="text-3xl text-white"
                    onClick={() => setToggle(false)}
                  />
                ) : (
                  <RiMenu3Fill
                    onClick={() => setToggle(true)}
                    className="text-3xl text-white"
                  />
                )}
              </div>
            </Flex>
          </div>
          <div
            className={`absolute ${toggle ? "right-0" : "right-[-100%]"} right-0 top-[110px] h-screen w-full bg-black duration-300 ease-in-out lg:static lg:h-auto lg:w-8/12 lg:bg-transparent`}
          >
            <List className="flex flex-col items-center justify-end gap-6 lg:flex-row">
              <ListItem className="text-xl font-semibold text-white">
                <Link onClick={() => setToggle(false)} to="/" className="">
                  Home
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link onClick={() => setToggle(false)} to="/about" className="">
                  About
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link
                  onClick={() => setToggle(false)}
                  to="/services"
                  className=""
                >
                  Services
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link
                  onClick={() => setToggle(false)}
                  to="/services"
                  className=""
                >
                  Recent Events
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link
                  onClick={() => setToggle(false)}
                  to="/pricing"
                  className=""
                >
                  Pricing
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link
                  onClick={() => setToggle(false)}
                  to="/services"
                  className=""
                >
                  Bridal Special
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link
                  onClick={() => setToggle(false)}
                  to="/contact"
                  className=""
                >
                  Contact
                </Link>
              </ListItem>
            </List>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
