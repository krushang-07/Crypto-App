import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, Heading, HStack, Text, VStack, Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Nft = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10; // Adjust as needed
  const paginationRange = 5; // Number of page buttons to display

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const { data, headers } = await axios.get(
          `${server}nfts/list?per_page=${itemsPerPage}&page=${page}`
        );
        setNfts(data);
        setTotalPages(Math.ceil(parseInt(headers["total-count"]) / itemsPerPage));
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchNFT();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setLoading(true);
  };

  if (error) return <ErrorComponent message={"Error While Fetching NFT's"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Heading p={8} color={"yellow.700"} textAlign="center">
            NFT's
          </Heading>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {nfts.map((i) => (
              <Box
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                key={i.id}
                p={4}
                m={2}
                borderWidth={1}
                borderRadius="lg"
                shadow="md"
                bgColor="white"
                color="black"
                _hover={{ bgColor: "yellow.100" }}
              >
                <NftCard
                  name={i.name}
                  symbol={i.symbol}
                  assets={i.asset_platform_id}
                />
              </Box>
            ))}
          </HStack>
          <HStack w={"full"} justifyContent={"center"} mt={8} m={"5"}>
            <Button
              disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
              bgColor={"yellow.600"}
              rounded={"md"}
              color={"white"}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages > paginationRange ? paginationRange : totalPages }, (_, index) => (
              <Button
                key={index}
                bgColor={page === index + 1 ? "yellow.600" : "gray.200"}
                rounded={"md"}
                color={"white"}
                onClick={() => handlePageChange(index + 1)}
                _hover={{ bgColor: "yellow.700" }}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              disabled={page === totalPages}
              onClick={() => handlePageChange(page + 1)}
              bgColor={"yellow.600"}
              rounded={"md"}
                color={"white"}
            >
              Next
            </Button>
          </HStack>
        </>
      )}
    </Container>
  );
};

const NftCard = ({ name, symbol, assets }) => (
  <VStack
    w={"52"}
    h={"52"}
    shadow={"lg"}
    p={"8"}
    borderRadius={"lg"}
    transition={"all 0.3s"}
    m={"4"}
    css={{
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}
  >
    <Text noOfLines={1}>{symbol}</Text>
    <Text p={"2"} noOfLines={1}>
      {name}
    </Text>
    <Text noOfLines={1}>Assets: {assets}</Text>
  </VStack>
);

export default Nft;
