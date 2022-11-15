import { Box, Image, Grid, useColorModeValue } from "@chakra-ui/react";

const Inicio = () => {
  return (
    <Box>
      <Image
        src={useColorModeValue("/MainPageLogoWhite.png", "/MainPageLogo.jpg")}
        alt="main-page-logo"
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
