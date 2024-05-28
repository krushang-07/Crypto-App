import { ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Stack,
  Text,
  VStack,
  HStack,
  Link,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const avatarSrc =
  "https://github.com/krushang-07/Crypto-App/assets/153190903/4e6cec65-d0d1-4061-a0c3-acd5cc46c7a5";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack
        direction={["column", "row"]}
        h={"full"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>

        <HStack spacing={4}>
          <Link href="https://opensea.io/Art0n_nft" isExternal>
            <Text p={"2"} fontSize={"small"}> My NFT's</Text>
            <IconButton
              aria-label="LinkedIn"
              icon={<ViewIcon />}
              size={"lg"}
              variant={"ghost"}
              colorScheme={"whiteAlpha"}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/krushang-savaliya-497668242"
            isExternal
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size={"lg"}
              variant={"ghost"}
              colorScheme={"whiteAlpha"}
            />
          </Link>
          <Link href="https://github.com/krushang-07" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size={"lg"}
              variant={"ghost"}
              colorScheme={"whiteAlpha"}
            />
          </Link>
          <Link href="https://x.com/KrushangS07" isExternal>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              size={"lg"}
              variant={"ghost"}
              colorScheme={"whiteAlpha"}
            />
          </Link>
        </HStack>
      </Stack>
      <Text textAlign={"center"} fontSize={"sm"} mt={8}>
        &copy; {new Date().getFullYear()} CryptoHub. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
