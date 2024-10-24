import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react"; // Added Text import

const NavHoverBox = ({ icon: Icon, title, description }) => {
  // Destructure props correctly
  return (
    <>
      <Flex
        pos={"absolute"}
        mt={"calc(100px - 7.5px)"}
        ml={"-10px"}
        borderTop={"10px solid transparent"}
        borderBottom={"10px solid transparent"}
        borderRight={"10px solid #82AAAD"}
      />
      <Flex
        h={200}
        w={200}
        flexDir={"column"}
        alignItems={"center"}
        justify={"center"}
        backgroundColor={"#82AAAD"}x
        borderRadius={"5px"}
        color={"#fff"}
        textAlign={"center"}
      >
        <Icon fontSize={"3xl"} mb={4} /> {/* Correctly render the icon */}
        <Heading size={"md"} fontWeight={"normal"}>
          {title}
        </Heading>
        <Text>{description}</Text> {/* Added Text import to fix rendering */}
      </Flex>
    </>
  );
};

export default NavHoverBox;
