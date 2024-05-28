import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import exchange from "../assets/exchange.png"; // Add appropriate image sources
import coins from "../assets/coin.png"; // Add appropriate image sources
import nft from "../assets/nft.png"; // Add appropriate image sources
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"white"} w={"full"} minH={"100vh"} py={10} color={"black"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"scale(1)"}
        />
      </motion.div>

      <Text
        fontSize={{ base: "4xl", md: "6xl" }}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"yellow.700"}
        mt={{ base: "-10", md: "-20" }}
      >
        CryptoHub
      </Text>

      <VStack spacing={12} mt={10} px={4} justifyContent={"space-evenly"}>
        <Box
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          textAlign={"center"}
          p={8}
          shadow="lg"
          borderWidth="1px"
          borderRadius="md"
          w={"full"}
          maxW={"container.lg"}
          bgColor={"white"}
          color={"black"}
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={8}>
            <Image
              src={exchange}
              boxSize={{ base: "200px", md: "400px" }}
              borderRadius="md"
            />
            <Box textAlign={"left"}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                mb={4}
                color={"yellow.700"}
              >
                Coin Exchange Platforms
              </Heading>
              <Text fontSize={"md"} mb={4}>
                Explore the best coin exchange platforms where you can trade
                your favorite cryptocurrencies securely and efficiently. Get
                insights on transaction fees, supported currencies, and platform
                security features. Popular platforms include Binance, Coinbase,
                and Kraken.
              </Text>
              <Text fontSize={"md"} color={"yellow.600"}>
                These platforms offer a wide range of services including spot
                trading, futures trading, staking, and more. Ensure to check
                their security features and user reviews before choosing a
                platform.
              </Text>
            </Box>
          </Stack>
        </Box>

        <Box
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          textAlign={"center"}
          p={8}
          shadow="lg"
          borderWidth="1px"
          borderRadius="md"
          w={"full"}
          maxW={"container.lg"}
          bgColor={"white"}
          color={"black"}
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={8}>
            <Image
              src={coins}
              boxSize={{ base: "200px", md: "400px" }}
              borderRadius="md"
            />
            <Box textAlign={"left"}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                mb={4}
                color={"yellow.700"}
              >
                Different Crypto Coins
              </Heading>
              <Text fontSize={"md"} mb={4}>
                Discover a wide variety of cryptocurrencies available in the
                market. Learn about their unique features, use cases, and market
                performance to make informed investment decisions. Popular coins
                include Bitcoin, Ethereum, and Ripple.
              </Text>
              <Text fontSize={"md"} color={"yellow.600"}>
                Each cryptocurrency operates on different technologies and
                serves various purposes. Bitcoin is known for its store of
                value, Ethereum for its smart contracts, and Ripple for its
                cross-border payment solutions.
              </Text>
            </Box>
          </Stack>
        </Box>

        <Box
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          textAlign={"center"}
          p={8}
          shadow="lg"
          borderWidth="1px"
          borderRadius="md"
          w={"full"}
          maxW={"container.lg"}
          bgColor={"white"}
          color={"black"}
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={8}>
            <Image
              src={nft}
              boxSize={{ base: "200px", md: "400px" }}
              borderRadius="md"
            />
            <Box textAlign={"left"}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                mb={4}
                color={"yellow.700"}
              >
                Different NFTs
              </Heading>
              <Text fontSize={"md"} mb={4}>
                Dive into the world of NFTs (Non-Fungible Tokens) and explore
                various digital assets ranging from art and music to virtual
                real estate. Understand how NFTs are transforming digital
                ownership and creativity.
              </Text>
              <Text fontSize={"md"} color={"yellow.600"}>
                NFTs are unique digital assets that represent ownership of a
                specific item or piece of content. Popular NFT marketplaces
                include OpenSea, Rarible, and Foundation. Whether you're a
                collector or a creator, the NFT space offers endless
                opportunities.
              </Text>
            </Box>
          </Stack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;
