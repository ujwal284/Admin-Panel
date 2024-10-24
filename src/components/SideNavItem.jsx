import React, { useState } from "react";
import { Icon as ChakraIcon, Flex, Text } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SideNavItem = ({
  navSize,
  title,
  icon,
  active,
  children,
  isExpandable,
  to, // Accept the "to" prop for navigation
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false); // State to control rotation

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setRotate(!rotate); // Toggle rotation
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    if (!isExpandable && to) {
      navigate(to); // Navigate to the route if not expandable
    }
  };

  return (
    <Flex
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Flex
        onClick={isExpandable ? handleToggle : handleNavigation} // Navigate if not expandable
        cursor="pointer"
        width="100%"
        alignItems="center"
        p={3}
        _hover={{ backgroundColor: "#6f9dc9" }}
        borderRadius="8px"
        backgroundColor={active ? "#fff" : "transparent"}
      >
        <ChakraIcon
          as={icon}
          fontSize="xl"
          color={active ? "#fff" : "gray.500"}
        />
        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
          {title}
        </Text>
        {isExpandable && (
          <Flex
            ml="auto"
            transition="transform 0.3s"
            transform={rotate ? "rotate(180deg)" : "rotate(0deg)"} // Rotate based on state
          >
            <FiChevronDown />
          </Flex>
        )}
      </Flex>
      {isOpen && (
        <Flex flexDir="column" pl={6}>
          {children}
        </Flex>
      )}
    </Flex>
  );
};

export default SideNavItem;
