import { Button, HStack, Image } from "@chakra-ui/react";
//import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import btcSrc from "../assets/btc.png"
const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"base"}
      bgColor={"yellow.500"}
      display={"flex"}
      alignItems={"center"}
    >
      <Text p={"2"} justifyContent={"flex-start"} fontSize={"xx-large"} color={"yellow.900"}>
        CryptoHub
      </Text>
      <Image
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        src={btcSrc}
        />

      <Button
        variant={"unstyled"}
        color={"white"}
        p={"1"}
        m={"3"}
        justifyContent={"flex-end"}
        fontSize={"x-large"}
      >
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} p={"1"} m={"3"} fontSize={"x-large"}>
        <Link to="/exchanges">Exchange</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} p={"1"} m={"3"} fontSize={"x-large"}>
        <Link to="/coins">Coins</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} p={"1"} m={"3"} fontSize={"x-large"}>
        <Link to="/nft">NFT</Link>
      </Button>
    </HStack>
  );
};

export default Header;
