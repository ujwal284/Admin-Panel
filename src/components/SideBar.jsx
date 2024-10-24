import React, { useState } from "react";
import SideNavItem from "./SideNavItem";
import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import {
  FiCalendar,
  FiHome,
  FiMenu,
  FiSettings,
  FiUser,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";

const SideBar = () => {
  const [navSize, changeNavSize] = useState("large");

  return (
    <Flex
      pos="sticky"
      top="0px"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0.05)"
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      transition="width 0.6s ease, background-color 0.6s ease"
      bg={"white"}
    >
      <Flex p={"5%"} flexDir={"column"} alignItems={"flex-start"}>
        <IconButton
          background={"none"}
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => changeNavSize(navSize === "small" ? "large" : "small")}
        />
        <SideNavItem
          navSize={navSize}
          icon={FiHome}
          title={"Dashboard"}
          to="/dashbaord"
        />
        <SideNavItem
          navSize={navSize}
          icon={FiCalendar}
          title={"Calendar"}
          to="/calendar"
        />
        <SideNavItem
          navSize={navSize}
          icon={FiUser}
          title={"Clients"}
          isExpandable
        >
          <SideNavItem
            navSize={navSize}
            icon={FiUserPlus}
            title={"Client 1"}
            to="/clients/client1"
          />
          <SideNavItem
            navSize={navSize}
            icon={FiUsers}
            title={"Client 2"}
            to="clients/clients2"
          />
        </SideNavItem>
        <SideNavItem
          navSize={navSize}
          icon={FiSettings}
          title={"Settings"}
          to="/setings"
        />
      </Flex>
      <Flex
        p="5%"
        flexDir={"column"}
        w={"100%"}
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={"4"}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align={"center"}>
          <Avatar size={"sm"} src="man.png" />
          <Flex
            flexDir={"column"}
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as={"h3"} size={"sm"}>
              Hala Madrid
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
