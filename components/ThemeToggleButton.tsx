import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
  Image,
} from "@chakra-ui/react";
const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue("black", "white")}
      onClick={toggleColorMode}
      borderRadius="full"
      zIndex={10}
      p={2}
      pr={1}
      boxShadow={`0 0 5px ${useColorModeValue("black", "white")} `}
      cursor="pointer"
      _hover={{
        boxShadow: `0 0 10px ${useColorModeValue("black", "white")} `,
      }}
      transition="all 0.3s ease"
    >
      <Image
        src={useColorModeValue("/White_NoBG.png", "/Black_NoBG.png")}
        alt="main-page-logo"
        w="1.5rem"
      />
    </Box>
  );
};

export default ThemeToggleButton;
