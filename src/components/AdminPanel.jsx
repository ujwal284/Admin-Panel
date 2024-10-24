import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "./SideBar.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";

const AdminPanel = () => {
  return (
    <>
      <Flex>
        <SideBar />
        <Box w={"100%"}>
          <Home />
          <About />
        </Box>
      </Flex>
    </>
  );
};

export default AdminPanel;
