import React from "react";
import { Box, Image, Badge, VStack,Text } from "@chakra-ui/react";

const ShoeCard = ({ img, name, price, isSold }) => {
  return (
    <>
      <VStack textColor={'black'} fontWeight={'semibold'} align={"center"} position={'relative'} justifyContent={"center"}>
        {isSold && <Badge p={4} rounded={'xl'} position={'absolute'} top={1} right={6} colorScheme="red">Sold</Badge>}
        <VStack bg={"orange.100"} width={'90%'}>
          <Image src={img} alt={name} width={"50%"} height={"auto"} />
        </VStack>
        <Text>  {name} </Text>
        <Text>  {price} </Text>
      </VStack>
    </>
  );
};

export default ShoeCard;
