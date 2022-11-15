import {
    IconButton,
    useColorMode,
    useColorModeValue,
    Box,
} from "@chakra-ui/react";
import { MdOutlineWbSunny as SunIcon } from "react-icons/md";
import { BsMoonStarsFill as MoonIcon } from "react-icons/bs";
// import { SunIcon, MoonIcon } from "@chakra-ui/icons";
const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();
    return (
        <Box
            bg={useColorModeValue("black", "white")}
            onClick={toggleColorMode}
            borderRadius="full"
            zIndex={10}
            p={4}
            boxShadow={`0 0 5px ${useColorModeValue("black", "white")} `}
            cursor="pointer"
            _hover={{
                boxShadow: `0 0 10px ${useColorModeValue("black", "white")} `,
            }}
            transition="all 0.3s ease"
        ></Box>
        // <IconButton
        //     aria-label="Toggle theme"
        //
        //
        // />
    );
};

export default ThemeToggleButton;
