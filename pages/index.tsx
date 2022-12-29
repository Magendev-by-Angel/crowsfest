import { Box, Image, Grid, useColorModeValue, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Slider from "../components/Slider";
import { useState } from "react";
const Inicio = () => {
  const foundersIconStyle = {
    boxShadow: "0 0 10px gray",
    borderRadius: "md",
    overflow: "hidden",
    transition: "box-shadow 300ms ease-in-out",
    _hover: {
      boxShadow: "0 0 20px gray",
    },
  };
  const foundersContent = {
    templateColumns: "1fr",
    templateRows: "20% 80%",
    templateAreas: `"title" "text"`,
    minH: "150px",
  };
  const foundersTitleName = {
    justify: "center",
    align: "end",
    fontSize: "1.5rem",
    fontFamily: `'Ubuntu', sans-serif`,
    borderBottom: "1px solid",
    borderColor: "red.900",
  };
  const [time, setTime] = useState(210);
  return (
    <Box>
      <Head>
        <title>Crows Fest - Inicio</title>
      </Head>
      <Grid
        templateColumns="12.5% 1fr 12.5%"
        templateRows="1fr"
        templateAreas={`". image ."`}
      >
        <Image
          gridArea="image"
          src={useColorModeValue(
            "/MainPageLogo-NoBG-W.png",
            "/MainPageLogo-NoBG.png"
          )}
          mt={1}
          alt="main-page-logo"
          // filter={`drop-shadow(0 0 5px ${useColorModeValue("black", "white")})`}
        />
      </Grid>

      <Grid>
        <Box
          fontSize="2.5rem"
          fontFamily={`'Ubuntu', sans-serif`}
          textAlign="center"
        >
          Getting Bigger, Getting Better And Faster Than You Think
        </Box>
      </Grid>
      <Slider time={time} setTime={setTime} />
      <Grid mt={{ base: "5rem", md: "20rem" }}>
        <Box
          fontSize="2.5rem"
          fontFamily={`'Ubuntu', sans-serif`}
          textAlign="center"
          mb={10}
          borderBottom="solid 1px"
        >
          Get to know us
        </Box>
        <Grid
          templateColumns={{ base: "1fr", md: "12.5% 1fr 1fr 12.5%" }}
          templateRows={{
            base: "repeat(1fr,6)",
            md: "repeat(1fr,3)",
          }}
          templateAreas={{
            base: `"leopicture" "leocontent" "davpicture" "davcontent" "angpicture" "angcontent" `,
            md: `". leopicture leocontent ." ". davcontent davpicture ." ". angpicture angcontent ."`,
          }}
          gap={10}
        >
          <Grid gridArea="leopicture" {...foundersIconStyle}>
            <Image src="/Founders/leo.jpg" />
          </Grid>
          <Grid gridArea="leocontent" {...foundersContent}>
            <Flex gridArea="title" {...foundersTitleName}>
              Leonardo de la Salas
            </Flex>
            <Flex gridArea="text">Head of the event and main orginizer.</Flex>
          </Grid>
          <Grid gridArea="davpicture" {...foundersIconStyle}>
            <Image src="/Founders/david.jpg" />
          </Grid>
          <Grid gridArea="davcontent" {...foundersContent}>
            <Flex gridArea="title" {...foundersTitleName}>
              David Fernandez
            </Flex>
            <Flex gridArea="text">Legal strategist and Stage manager</Flex>
          </Grid>
          <Grid gridArea="angpicture" {...foundersIconStyle}>
            <Image src="/Founders/angel.jpg" />
          </Grid>
          <Grid gridArea="angcontent" {...foundersContent}>
            <Flex gridArea="title" {...foundersTitleName}>
              Angel Zuñiga
            </Flex>
            <Flex gridArea="text">Technical lead and second Stage lead</Flex>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Inicio;
