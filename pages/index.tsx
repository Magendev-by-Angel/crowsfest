import { Box, Image, Grid, useColorModeValue } from "@chakra-ui/react";

const Inicio = () => {
  return (
    <Box>
      <Image
        src={useColorModeValue(
          "/MainPageLogo-NoBG-W.png",
          "/MainPageLogo-NoBG.png"
        )}
        mt={1}
        alt="main-page-logo"
        // filter={`drop-shadow(0 0 5px ${useColorModeValue("black", "white")})`}
      />
      <Grid>
        <Box
          fontSize="2.5rem"
          fontFamily={`'Ubuntu', sans-serif`}
          textAlign="center"
        >
          Getting Bigger, Getting Better And Faster Than You Think
        </Box>
      </Grid>
    </Box>
  );
};
export default Inicio;
