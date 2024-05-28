import {
  Button,
  HStack,
  Image,
  Box,
  Text,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import btcSrc from "../assets/btc.png";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Box p={"4"} shadow={"base"} bgColor={"yellow.500"}>
      <HStack
        display={isLargerThan600 ? "flex" : "none"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <HStack>
          <Text p={"2"} fontSize={"xx-large"} color={"yellow.900"}>
            CryptoHub
          </Text>
          <Image w={"10"} h={"10"} objectFit={"contain"} src={btcSrc} />
        </HStack>
        <HStack spacing={4}>
          <Button variant={"unstyled"} color={"white"} fontSize={"large"}>
            <Link to="/">Home</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"} fontSize={"large"}>
            <Link to="/exchanges">Exchange</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"} fontSize={"large"}>
            <Link to="/coins">Coins</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"} fontSize={"large"}>
            <Link to="/nft">NFT</Link>
          </Button>
        </HStack>
      </HStack>

      {!isLargerThan600 && (
        <HStack justifyContent={"space-between"}>
          <HStack>
            <Text p={"2"} fontSize={"xx-large"} color={"yellow.900"}>
              CryptoHub
            </Text>
            <Image w={"10"} h={"10"} objectFit={"contain"} src={btcSrc} />
          </HStack>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant={"unstyled"}
            color={"white"}
            aria-label="Open Menu"
          />
        </HStack>
      )}

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>CryptoHub</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="flex-start">
              <Button
                variant={"unstyled"}
                color={"black"}
                fontSize={"large"}
                onClick={onClose}
              >
                <Link to="/">Home</Link>
              </Button>
              <Button
                variant={"unstyled"}
                color={"black"}
                fontSize={"large"}
                onClick={onClose}
              >
                <Link to="/exchanges">Exchange</Link>
              </Button>
              <Button
                variant={"unstyled"}
                color={"black"}
                fontSize={"large"}
                onClick={onClose}
              >
                <Link to="/coins">Coins</Link>
              </Button>
              <Button
                variant={"unstyled"}
                color={"black"}
                fontSize={"large"}
                onClick={onClose}
              >
                <Link to="/nft">NFT</Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
