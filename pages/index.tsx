import { Box, Image, Grid, useColorModeValue } from "@chakra-ui/react";
import Slider from "../components/Slider";
import { useState } from "react";
const Inicio = () => {
    const [time, setTime] = useState(260);
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
            <Slider time={time} setTime={setTime} />
            <Grid mt="20rem">
                <Box
                    fontSize="2.5rem"
                    fontFamily={`'Ubuntu', sans-serif`}
                    textAlign="center"
                >
                    Get to know us
                </Box>
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    templateRows={{
                        base: "repeat(1fr,6)",
                        md: "repeat(1fr,3)",
                    }}
                    templateAreas={{
                        base: `"leopicture" "leocontent" "angcontent" "angpicture" "davpicture" "davcontent"`,
                        md: `"leopicture leocontent" "angcontent angpicture" "davpicture davcontent"`,
                    }}
                    gap={10}
                >
                    <Grid gridArea="leopicture">
                        <Image src="/Founders/leo.jpg" />
                    </Grid>
                    <Grid gridArea="leocontent">12</Grid>
                    <Grid gridArea="angpicture">
                        <Image src="/Founders/david.jpg" />
                    </Grid>
                    <Grid gridArea="angcontent">22</Grid>
                    <Grid gridArea="davpicture">
                        <Image src="/Founders/angel.jpg" />
                    </Grid>
                    <Grid gridArea="davcontent">32</Grid>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Inicio;
