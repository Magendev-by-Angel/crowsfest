import {
  Box,
  Flex,
  Image,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";

const NotFoundIcon = () => {
  return <Image src="/404.png" alt="Not Found" dropShadow="0 0 10px white" />;
};

const notFound = () => {
  const shadowColor = useColorModeValue("black", "white");
  return (
    <>
      <Head>
        <title>Crows Fest - Page not found</title>
      </Head>
      <Flex justify="center" align="center" h="calc(100vh - 3.5rem)">
        <Flex
          w={{ base: "100%", md: "75%" }}
          direction="column"
          h="75%"
          px={{ base: 5, md: 0 }}
          justify="center"
          align="center"
          boxShadow={`0 0 5px ${shadowColor}, 0 0 10px ${shadowColor} inset`}
          borderRadius="md"
        >
          <Box as="h1" fontSize="4xl" mb={5}>
            Page not found
          </Box>
          <NotFoundIcon />
          <Box mt={5}>
            Looks like the page you're looking for does not exist
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default notFound;
