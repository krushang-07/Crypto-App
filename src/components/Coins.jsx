


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { server } from "../index";
// import {
//   Button,
//   Container,
//   HStack,
//   Input,
//   VStack,
//   InputGroup,
//   InputLeftElement,
//   Heading,
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// import Loader from "../components/Loader";
// import ErrorComponent from "./ErrorComponent";
// import CoinCard from "./CoinCard";
// import { RadioGroup } from "@chakra-ui/react";
// import { Radio } from "@chakra-ui/react";

// const Coins = () => {
//   const [coins, setCoins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currency, setCurrency] = useState("inr");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const coinsPerPage = 50;

//   const btns = new Array(50).fill(1);

//   const currencySymbol =
//     currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

//   const changePage = (page) => {
//     setPage(page);
//     setLoading(true);
//   };

//   useEffect(() => {
//     const fetchCoins = async () => {
//       try {
//         const { data, headers } = await axios.get(
//           `${server}/coins/markets?vs_currency=${currency}&per_page=${coinsPerPage}&page=${page}`
//         );
//         setCoins(data);
//         setTotalPages(
//           Math.ceil(parseInt(headers["total-count"]) / coinsPerPage)
//         );
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchCoins();
//   }, [currency, page]);

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const filteredCoins = coins.filter(
//     (coin) =>
//       coin.name.toLowerCase().includes(searchTerm) ||
//       coin.symbol.toLowerCase().includes(searchTerm)
//   );

//   if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

//   return (
//     <Container maxW={"container.xl"} py={4} justifyContent={"space-evenly"}>
//       <VStack spacing={4} mb={8}>
//         <Heading color={"yellow.700"} p={"3"}>Here All Crypto-Coin</Heading>
//         <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
//           <HStack spacing={"4"}>
//             <Radio value={"inr"}>INR</Radio>
//             <Radio value={"usd"}>USD</Radio>
//             <Radio value={"eur"}>EUR</Radio>
//           </HStack>
//         </RadioGroup>
//         <InputGroup>
//           <InputLeftElement
//             pointerEvents="none"
//             children={<SearchIcon color="gray.300" />}
//           />
//           <Input
//             placeholder="Search by coin name or symbol"
//             value={searchTerm}
//             onChange={handleInputChange}
//             size="lg"
//             borderColor="gray.300"
//             focusBorderColor="blue.500"
//           />
//         </InputGroup>
//       </VStack>

//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
//             {filteredCoins.map((coin) => (
//               <CoinCard
//                 id={coin.id}
//                 key={coin.id}
//                 name={coin.name}
//                 price={coin.current_price}
//                 img={coin.image}
//                 symbol={coin.symbol}
//                 currencySymbol={currencySymbol}
//                 rank={coin.market_cap_rank}
//               />
//             ))}
//           </HStack>

//           <HStack w={"full"} overflowX={"auto"} p={"20"} mt={4}>
//             {btns.map((item, index) => (
//               <Button
//                 key={index}
//                 bgColor={"yellow.600"}
//                 rounded={"md"}
//                 color={"white"}
//                 onClick={() => changePage(index + 1)}
//               >
//                 {index + 1}
//               </Button>
//             ))}
//           </HStack>
//         </>
//       )}
//     </Container>
//   );
// };

// export default Coins;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Button,
  Container,
  HStack,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
  Heading,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
import { RadioGroup, Radio } from "@chakra-ui/react";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const coinsPerPage = 50;

  const btns = new Array(50).fill(1);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data, headers } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&per_page=${coinsPerPage}&page=${page}`
        );
        setCoins(data);
        setTotalPages(
          Math.ceil(parseInt(headers["total-count"]) / coinsPerPage)
        );
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm) ||
      coin.symbol.toLowerCase().includes(searchTerm)
  );

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container maxW={"container.xl"} py={4} justifyContent={"space-evenly"}>
      <VStack spacing={4} mb={8}>
        <Heading color={"yellow.700"} p={"3"}>Crypto-Coin's</Heading>
        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            placeholder="Search by coin name or symbol"
            value={searchTerm}
            onChange={handleInputChange}
            size="lg"
            borderColor="gray.300"
            focusBorderColor="blue.500"
          />
        </InputGroup>
      </VStack>

      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {filteredCoins.map((coin) => (
              <Box
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                key={coin.id}
                p={4}
                m={2}
                borderWidth={1}
                borderRadius="lg"
                shadow="md"
                bgColor="white"
                color="black"
                _hover={{ bgColor: "yellow.200" }}
              >
                <CoinCard
                  id={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  img={coin.image}
                  symbol={coin.symbol}
                  currencySymbol={currencySymbol}
                  rank={coin.market_cap_rank}
                />
              </Box>
            ))}
          </HStack>

          <HStack w={"full"} overflowX={"auto"} p={4} mt={4} spacing={2}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"yellow.600"}
                rounded={"md"}
                color={"white"}
                onClick={() => changePage(index + 1)}
                as={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
