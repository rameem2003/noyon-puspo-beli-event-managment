import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";

const AdminHeader = () => {
  return (
    <header>
      <Container>
        <Flex>
          <h1>Welcome, Admin</h1>
        </Flex>
      </Container>
    </header>
  );
};

export default AdminHeader;
