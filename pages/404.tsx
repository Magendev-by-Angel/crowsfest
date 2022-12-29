import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";

const NotFoundIcon = () => {
  return (
    <svg
      width="402"
      height="177"
      viewBox="0 0 402 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 83V5C0.5 2.51472 2.51472 0.5 5 0.5H13C15.4853 0.5 17.5 2.51472 17.5 5V65C17.5 68.0376 19.9624 70.5 23 70.5H77C80.0376 70.5 82.5 68.0376 82.5 65V5C82.5 2.51472 84.5147 0.5 87 0.5H95C97.4853 0.5 99.5 2.51472 99.5 5V172C99.5 174.485 97.4853 176.5 95 176.5H87C84.5147 176.5 82.5 174.485 82.5 172V93C82.5 89.9624 80.0376 87.5 77 87.5H18H5C2.51472 87.5 0.5 85.4853 0.5 83Z"
        stroke="white"
      />
      <path
        d="M302.5 83V5C302.5 2.51472 304.515 0.5 307 0.5H315C317.485 0.5 319.5 2.51472 319.5 5V65C319.5 68.0376 321.962 70.5 325 70.5H379C382.038 70.5 384.5 68.0376 384.5 65V5C384.5 2.51472 386.515 0.5 389 0.5H397C399.485 0.5 401.5 2.51472 401.5 5V172C401.5 174.485 399.485 176.5 397 176.5H389C386.515 176.5 384.5 174.485 384.5 172V93C384.5 89.9624 382.038 87.5 379 87.5H320H307C304.515 87.5 302.5 85.4853 302.5 83Z"
        stroke="white"
      />
      <path
        d="M250.5 5V172C250.5 174.485 248.485 176.5 246 176.5H156C153.515 176.5 151.5 174.485 151.5 172V5C151.5 2.51472 153.515 0.5 156 0.5H246C248.485 0.5 250.5 2.51472 250.5 5Z"
        stroke="white"
      />
      <path
        d="M235.5 20V157C235.5 159.485 233.485 161.5 231 161.5H171C168.515 161.5 166.5 159.485 166.5 157V20C166.5 17.5147 168.515 15.5 171 15.5H231C233.485 15.5 235.5 17.5147 235.5 20Z"
        stroke="white"
      />
    </svg>
  );
};

const notFound = () => {
  return (
    <>
      <Head>
        <title>Crows Fest - Page not found</title>
      </Head>
      <Flex
        justify="center"
        align="center"
        h="calc(100vh - 3.5rem)"
        direction="column"
      >
        <Box as="h1" fontSize="4xl">
          Page not found
        </Box>
        <Box>Looks like the page you're looking for does not exist</Box>
        {/* <NotFoundIcon /> */}
      </Flex>
    </>
  );
};

export default notFound;
