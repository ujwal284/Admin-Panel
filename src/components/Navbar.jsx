import {
  Box,
  Flex,
  Avatar,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w={"100%"}
      bg={"#3182ce"}
      h={"50px"}
      p={"10px"}
      color={"white"}
      justifyContent={"space-between"}
      position={"sticky"}
      top={0}
      zIndex={10}
      alignItems="center"
    >
      {/* Hamburger Menu for mobile screens */}
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        display={{ base: "block", md: "none" }} // Only show on mobile
        onClick={onOpen}
      />

      {/* Links for desktop */}
      <Flex
        display={{ base: "none", md: "flex" }} // Hide on mobile
        w={"10%"}
        justifyContent={"space-between"}
      >
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </Flex>

      {/* Avatar and Logout button */}
      <Flex alignItems="center">
        <Avatar h={"30px"} w={"30px"} />
        <ChakraLink as={Link} to="/" ml={2}>
          Logout
        </ChakraLink>
      </Flex>

      {/* Drawer (Side Menu for mobile navigation) */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Link to="/home" onClick={onClose}>
                Home
              </Link>
              <Link to="/about" onClick={onClose}>
                About
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
