import React, { useEffect, useState } from "react";
import Container from "./../common/Container";
import Flex from "./../common/Flex";
import Image from "./../common/Image";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
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
      className={`${scrolled ? "bg-black py-4" : "bg-transparent py-10"} fixed left-0 top-0 z-[99999999] w-full duration-300 ease-in-out`}
    >
      <Container>
        <Flex className="items-center justify-between">
          <div className="w-4/12">
            <Link to="/">
              <Image src="/logo.jpg" className="h-[80px] w-[80px]" />
            </Link>
          </div>
          <div className="w-8/12">
            <List className="flex items-center justify-end gap-6">
              <ListItem className="text-xl font-semibold text-white">
                <Link to="/" className="">
                  Home
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link to="/about" className="">
                  About
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link to="/services" className="">
                  Services
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link to="/services" className="">
                  Recent Events
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link to="/services" className="">
                  Our Journey
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link to="/services" className="">
                  Collaborators
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link to="/contact" className="">
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
