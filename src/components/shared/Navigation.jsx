import React from "react";
import Container from "./../common/Container";
import Flex from "./../common/Flex";
import Image from "./../common/Image";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed left-0 top-0 w-full bg-transparent py-5 duration-300 ease-in-out">
      <Container>
        <Flex className="items-center justify-between">
          <div className="w-4/12">
            <Image src="/logo.jpg" className="h-[80px] w-[80px]" />
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
                  Collaborators
                </Link>
              </ListItem>
              <ListItem className="text-xl font-semibold text-white">
                <Link to="/services" className="">
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
