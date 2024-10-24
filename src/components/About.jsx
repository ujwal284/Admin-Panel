import React from "react";
import { Box, Image, Text, Button, Stack, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const About = () => {
  return (
    <>
      <Flex>
        <SideBar />
        <Box flex={1}>
          <Navbar />
          <Box p={{ base: 4, md: 8 }}>
            {" "}
            {/* Responsive padding */}
            <Stack spacing={6}>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                About Us
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }}>
                Welcome to our application! We are a dedicated team of
                developers and designers passionate about creating exceptional
                digital experiences. Our goal is to provide valuable solutions
                that empower users and enhance productivity.
              </Text>
              <Image
                src="https://via.placeholder.com/600x300"
                alt="About Us Image"
                borderRadius="md"
                boxShadow="md"
                objectFit="cover" // Ensures the image covers its container while maintaining aspect ratio
                maxW="100%" // Make the image responsive
                height={{ base: "auto", md: "300px" }} // Responsive height for larger screens
              />
              <Text fontSize={{ base: "md", md: "lg" }}>
                Our journey began with a simple idea: to bring innovation to
                everyday tasks. Since then, we have grown into a diverse team,
                committed to excellence and user satisfaction.
              </Text>
              <Button colorScheme="blue" size="lg">
                Learn More
              </Button>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default About;
