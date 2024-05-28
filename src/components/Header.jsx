import { Button, HStack } from "@chakra-ui/react";
//import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"base"}
      bgColor={"yellow.500"}
      display={"flex"}
      alignItems={"center"}
    >
      <Text p={"4"} justifyContent={"flex-start"} fontSize={"x-large"} color={"yellow.900"}>
        CryptoHub
      </Text>

      <Button
        variant={"unstyled"}
        color={"white"}
        p={"2"}
        m={"3"}
        justifyContent={""}
      >
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} p={"2"} m={"3"}>
        <Link to="/exchanges">Exchange</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} p={"2"} m={"3"}>
        <Link to="/coins">Coins</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} p={"2"} m={"3"}>
        <Link to="/nft">NFT</Link>
      </Button>
    </HStack>
  );
};

export default Header;
