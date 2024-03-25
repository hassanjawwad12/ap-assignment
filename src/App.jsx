import React, { useState } from "react";
import Header from "./Header.jsx";
import ShoeCard from "./ShoeCard.jsx";
import StateClear from "./StateClear.jsx";
import { Button, HStack, VStack } from "@chakra-ui/react";


const App = () => {
  const [shoes, setShoes] = useState([
    {
      img: "./shoe1.png",
      name: "LOGO 9540 BKA",
      price: "Rs. 17,500",
      isSold: false,
    },
    {
      img: "./shoe2.png",
      name: "LOGO 9541 BKA",
      price: "Rs. 18,000",
      isSold: false,
    },
    {
      img: "./shoe3.png",
      name: "LOGO 9542 BKA",
      price: "Rs. 16,800",
      isSold: true,
    },
    {
      img: "./shoe4.png",
      name: "LOGO 9543 BKA",
      price: "Rs. 19,200",
      isSold: false,
    },
  ]);

  const changeAllShoes = () => {
    setShoes([
      {
        img: "./shoe5.png",
        name: "LOGO 9844 BKA",
        price: "Rs. 20,000",
        isSold: true,
      },
      {
        img: "./shoe6.png",
        name: "LOGO 9544 BKA",
        price: "Rs. 17,300",
        isSold: false,
      },
      {
        img: "./shoe7.png",
        name: "LOGO 9545 BKA",
        price: "Rs. 21,000",
        isSold: true,
      },
      {
        img: "./shoe8.png",
        name: "LOGO 9546 BKA",
        price: "Rs. 22,500",
        isSold: false,
      },
    ]);
  };

  return (
    <>

     {/* This is the Question 1  */}
      <Header />
      <VStack width={"100%"} height={'90vh'}>
        <HStack mt={10} width={"100%"}>
          {shoes.map((shoe, index) => (
            <ShoeCard key={index} {...shoe} />
          ))}
        </HStack>
        <Button alignSelf={"center"} onClick={changeAllShoes}>
          Change All Shoes
        </Button>
      </VStack>

      {/* This is the Question 2 */}
       <StateClear />
    </>
  );
};

export default App;
