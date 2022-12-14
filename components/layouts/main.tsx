import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../navBar";
import type { Router } from "next/dist/client/router";
//                  next/app/dist/pages/client/router
type Props = {
  children: JSX.Element;
  router: Router;
};
const Main = ({ children, router }: Props) => {
  return (
    <Box as="main" overflow="hidden">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.xl" pt="3.5rem">
        {children}
      </Container>
    </Box>
  );
};

export default Main;
