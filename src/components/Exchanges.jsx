// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { server } from "../index";
// import {
//   Container,
//   Heading,
//   HStack,
//   Image,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import Loader from "./Loader";
// import ErrorComponent from "./ErrorComponent";

// const Exchanges = () => {
//   const [exchanges, setExchanges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchExchanges = async () => {
//       try {
//         const { data } = await axios.get(`${server}/exchanges`);
//         setExchanges(data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchExchanges();
//   }, []);

//   if (error)
//     return <ErrorComponent message={"Error While Fetching Exchanges"} />;

//   return (
//     <Container maxW={"container.xl"}>
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
//             <Heading color={"yellow.700"} p={"10"}>
//               Coin Exchange Platform
//             </Heading>
//             {exchanges.map((i) => (
//               <ExchangeCard
//                 key={i.id}
//                 name={i.name}
//                 img={i.image}
//                 rank={i.trust_score_rank}
//                 url={i.url}
//                 year={i.year_established}
//                 // desc={i.description}
//               />
//             ))}
//           </HStack>
//         </>
//       )}
//     </Container>
//   );
// };

// const ExchangeCard = ({ name, img, rank, url, year }) => (
//   <a href={url} target={"blank"}>
//     <VStack
//       w={"52"}
//       h={"52"}
//       shadow={"lg"}
//       p={"8"}
//       borderRadius={"lg"}
//       transition={"all 0.3s"}
//       m={"4"}
//       css={{
//         "&:hover": {
//           transform: "scale(1.1)",
//         },
//       }}
//     >
//       <Image
//         src={img}
//         w={"10"}
//         h={"10"}
//         objectFit={"contain"}
//         alt={"Exchange"}
//       />
//       <Heading size={"md"} noOfLines={1}>
//         Rank : {rank}
//       </Heading>
//       <Text p={"2"} noOfLines={1}>
//         {name}
//       </Text>
//       <Text>Es.Year : {year ? `${year}` : "NA"}</Text>
//     </VStack>
//   </a>
// );

// export default Exchanges;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { server } from "../index";
// import {
//   Button,
//   Container,
//   Heading,
//   HStack,
//   Image,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import Loader from "./Loader";
// import ErrorComponent from "./ErrorComponent";

// const Exchanges = () => {
//   const [exchanges, setExchanges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const exchangesPerPage = 50;

//   const btns = new Array(50).fill(1);

//   const changePage = (page) => {
//     setPage(page);
//     setLoading(true);
//   };

//   useEffect(() => {
//     const fetchExchanges = async () => {
//       try {
//         const { data, headers } = await axios.get(
//           `${server}/exchanges?per_page=${exchangesPerPage}&page=${page}`
//         );
//         setExchanges(data);
//         setTotalPages(
//           Math.ceil(parseInt(headers["total-count"]) / exchangesPerPage)
//         );
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchExchanges();
//   }, [page]);

//   if (error)
//     return <ErrorComponent message={"Error While Fetching Exchanges"} />;

//   return (
//     <Container maxW={"container.xl"}>
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
//             <Heading color={"yellow.700"} p={"10"}>
//               Coin Exchange Platform
//             </Heading>
//             {exchanges.map((i) => (
//               <ExchangeCard
//                 key={i.id}
//                 name={i.name}
//                 img={i.image}
//                 rank={i.trust_score_rank}
//                 url={i.url}
//                 year={i.year_established}
//                 // desc={i.description}
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

// const ExchangeCard = ({ name, img, rank, url, year }) => (
//   <a href={url} target={"blank"}>
//     <VStack
//       w={"52"}
//       h={"52"}
//       shadow={"lg"}
//       p={"8"}
//       borderRadius={"lg"}
//       transition={"all 0.3s"}
//       m={"4"}
//       css={{
//         "&:hover": {
//           transform: "scale(1.1)",
//         },
//       }}
//     >
//       <Image
//         src={img}
//         w={"10"}
//         h={"10"}
//         objectFit={"contain"}
//         alt={"Exchange"}
//       />
//       <Heading size={"md"} noOfLines={1}>
//         Rank : {rank}
//       </Heading>
//       <Text p={"2"} noOfLines={1}>
//         {name}
//       </Text>
//       <Text>Es.Year : {year ? `${year}` : "NA"}</Text>
//     </VStack>
//   </a>
// );

// export default Exchanges;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const exchangesPerPage = 50;

  const btns = new Array(50).fill(1);

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data, headers } = await axios.get(
          `${server}/exchanges?per_page=${exchangesPerPage}&page=${page}`
        );
        setExchanges(data);
        setTotalPages(
          Math.ceil(parseInt(headers["total-count"]) / exchangesPerPage)
        );
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, [page]);

  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Heading color={"yellow.700"} p={"10"} textAlign="center">
            Coin Exchange Platform
          </Heading>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <Box
                as={motion.div}
                whileHover={{ scale: 1.05 }}
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
                <ExchangeCard
                  name={i.name}
                  img={i.image}
                  rank={i.trust_score_rank}
                  url={i.url}
                  year={i.year_established}
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

const ExchangeCard = ({ name, img, rank, url, year }) => (
  <a href={url} target={"_blank"} rel="noopener noreferrer">
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
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        Rank : {rank}
      </Heading>
      <Text p={"2"} noOfLines={1}>
        {name}
      </Text>
      <Text>Es.Year : {year ? `${year}` : "NA"}</Text>
    </VStack>
  </a>
);

export default Exchanges;
