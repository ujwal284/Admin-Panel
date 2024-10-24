import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Card = ({ title, description, imageUrl }) => {
  return (
    <Box
      maxW={{ base: "100%", sm: "sm" }} // 100% width on mobile, fixed width on larger screens
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="6"
      bg="white"
      mx="auto" // Center the card on mobile
    >
      <Image src={imageUrl} alt={title} borderRadius="md" />

      <Stack mt="6" spacing="3">
        <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
          {title}
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }}>{description}</Text>
        <Button colorScheme="blue">Learn More</Button>
      </Stack>
    </Box>
  );
};

const Home = () => {
  return (
    <>
      <Flex>
        <SideBar />
        <Box flex={1}>
          <Navbar />

          {/* Responsive Grid */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }} // 1 column on mobile, 2 on small screens, 3 on larger screens
            spacing="10"
            p={{ base: "5", md: "10" }}
            pl={{ base: "5", md: "40" }} // Adjust padding for mobile and larger screens
          >
            <Card
              title="Mountain Adventure"
              description="Explore the beautiful mountain ranges and enjoy breathtaking views."
              imageUrl="https://via.placeholder.com/300x200"
            />
            <Card
              title="Beach Paradise"
              description="Relax at pristine beaches with golden sand and clear blue water."
              imageUrl="https://via.placeholder.com/300x200"
            />
            <Card
              title="City Life"
              description="Experience the hustle and bustle of the city that never sleeps."
              imageUrl="https://via.placeholder.com/300x200"
            />
            <Card
              title="Desert Safari"
              description="Discover the beauty of the desert with thrilling safari adventures."
              imageUrl="https://via.placeholder.com/300x200"
            />
            <Card
              title="Forest Retreat"
              description="Unwind in a peaceful forest retreat surrounded by nature."
              imageUrl="https://via.placeholder.com/300x200"
            />
            <Card
              title="Cultural Heritage"
              description="Immerse yourself in rich cultural experiences from around the world."
              imageUrl="https://via.placeholder.com/300x200"
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
