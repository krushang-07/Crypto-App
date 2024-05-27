import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Nft = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const { data } = await axios.get(`${server}nfts/list`);
        setNfts(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchNFT();
  }, []);

  if (error) return <ErrorComponent message={"Error While Fetching NFT's"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {nfts.map((i) => (
              <NftCard
                key={i.id}
                name={i.name}
                symbol={i.symbol}
                Assets={i.asset_platform_id}
                // desc={i.description}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const NftCard = ({ name, symbol, Assets }) => (
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

    <Text p={"7"} noOfLines={1}>
      {name}
    </Text>
    <Text noOfLines={1}>assets : {Assets}</Text>
  </VStack>
);

export default Nft;
