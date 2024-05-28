// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { server } from "../index";
// import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
// import Loader from "../components/Loader";
//  import ErrorComponent from "./ErrorComponent";
// import CoinCard from "./CoinCard";

// const Coins = () => {
//   const [coins, setCoins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);
//   const [currency, setCurrency] = useState("inr");

//   const currencySymbol =
//     currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

//   const changePage = (page) => {
//     setPage(page);
//     setLoading(true);
//   };

//   const btns = new Array(132).fill(1);

//   useEffect(() => {
//     const fetchCoins = async () => {
//       try {
//         const { data } = await axios.get(
//           `${server}/coins/markets?vs_currency=${currency}&page=${page}`
//         );
//         setCoins(data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchCoins();
//   }, [currency, page]);

//   if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

//   return (
//     <Container maxW={"container.xl"}>
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
//             <HStack spacing={"4"}>
//               <Radio value={"inr"}>INR</Radio>
//               <Radio value={"usd"}>USD</Radio>
//               <Radio value={"eur"}>EUR</Radio>
//             </HStack>
//           </RadioGroup>

//           <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
//             {coins.map((i) => (
//               <CoinCard
//                 id={i.id}
//                 key={i.id}
//                 name={i.name}
//                 price={i.current_price}
//                 img={i.image}
//                 symbol={i.symbol}
//                     currencySymbol={currencySymbol}
//                     rank={i.market_cap_rank}
//               />
//             ))}
//           </HStack>

//           <HStack w={"full"} overflowX={"auto"} p={"20"}>
//             {btns.map((item, index) => (
//               <Button
//                 key={index}
//                 bgColor={"blue.900"}
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
//   const [currency, setCurrency] = useState("usd");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const coinsPerPage = 50;

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

//   const renderPaginationButtons = () => {
//     const buttons = [];
//     for (let i = 1; i <= totalPages; i++) {
//       buttons.push(
//         <Button
//           key={i}
//           bgColor={i === page ? "blue.500" : "blue.900"}
//           rounded={"md"}
//           color={"white"}
//           onClick={() => changePage(i)}
//         >
//           {console.log(i)}
//           {i}
//         </Button>
//       );
//     }
//     return buttons;
//   };

//   if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

//   return (
//     <Container maxW={"container.xl"} py={4}>
//       <VStack spacing={4} mb={8}>
//         <Heading p={"10"}>Here All Crypto-Coin</Heading>
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
//             {renderPaginationButtons()}
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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Loader from "../components/Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
import { RadioGroup } from "@chakra-ui/react";
import { Radio } from "@chakra-ui/react";

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
        <Heading color={"yellow.700"} p={"3"}>Here All Crypto-Coin</Heading>
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
              <CoinCard
                id={coin.id}
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                img={coin.image}
                symbol={coin.symbol}
                currencySymbol={currencySymbol}
                rank={coin.market_cap_rank}
              />
            ))}
          </HStack>

          <HStack w={"full"} overflowX={"auto"} p={"20"} mt={4}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"yellow.600"}
                rounded={"md"}
                color={"white"}
                onClick={() => changePage(index + 1)}
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
