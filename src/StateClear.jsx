import React, { useState } from "react";
import { Button, Input, Text, VStack,HStack} from "@chakra-ui/react";

const StateClear = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <VStack align={"center"} justifyContent={"center"} py={4}>
        <Text fontWeight={"bold"} fontSize={"5xl"} color={"black"}>
          Is State Clear Now?
        </Text>
        <Input border={'1px solid black'} width={"50%"} type="text" onChange={handleChange} />
        <Button onClick={() => setText(text)}>Change State</Button>
        {text ? (
          <>
            <HStack
            mt={4}
            bg={'blue.700'}
            fontSize={'xl'}
            textColor={'white'}
            align={'center'}
            width={'90%'}
            justifyContent={'center'}
            p={2}
            >
              <Text>{text}</Text>
            </HStack>
          </>
        ) : null}
      </VStack>
    </>
  );
};

export default StateClear;
