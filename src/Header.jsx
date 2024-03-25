import React from "react";
import { HStack ,Icon,Spacer,Text} from "@chakra-ui/react";
import { CiMenuFries } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <HStack p={1} borderBottomWidth={1} borderBottomColor={'gray.400'}>
        <Icon as={CiMenuFries} w={6} h={6} color="black" />
        <Spacer/>
        <Text
        fontSize={'5xl'}
        fontWeight={'semibold'}
        color={'gray.800'}
        letterSpacing={14}
        >LOGO</Text>
        <Spacer/>
        <Icon as={CiSearch} w={6} h={6} color="black" />
        <Icon as={IoPersonOutline} w={6} h={6} color="black" />
        <Icon as={BsCart2} w={6} h={6} color="black" />
      </HStack>
    </>
  );
};

export default Header;
