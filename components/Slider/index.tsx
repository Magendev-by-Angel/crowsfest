import { Box, Flex, Img, keyframes, Button } from "@chakra-ui/react";

const movement = keyframes`
    0% {
        left: 150%;
    }
    0.5% {
        left: -30%;
    }
    99.5% {
        left: -1160%;
    }
    100% {
        left: -1340%;
    }
`;

interface Props {
    time: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
}
const shuffle = (array: string[]) => {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
const icons: string[] = [];
for (let i = 1; i < 45; i++) {
    icons.push(`/SliderPictures/${i}.jpg`);
}

const shuffledIcons = shuffle(icons);
const Slider = ({ time, setTime }: Props) => {
    // This method  will receive and array and will generate a new array with the same elements but in a random order

    return (
        <>
            <Flex
                position="relative"
                h="239px"
                borderRadius="md"
                direction="column"
            >
                <Flex justify="end" mb={5}>
                    <Button
                        mr={5}
                        onClick={() => {
                            setTime((prev) => prev - 50);
                        }}
                    >
                        +
                    </Button>
                    <Button
                        mr={5}
                        onClick={() => {
                            setTime((prev) => prev + 50);
                        }}
                    >
                        -
                    </Button>
                </Flex>

                <Flex position="relative" h="239px" borderRadius="md">
                    <Flex
                        position="absolute"
                        zIndex={2}
                        left="-100%"
                        animation={`${movement} ${time}s linear infinite`}
                        align="center"
                        h="478px"
                    >
                        {shuffledIcons.map((item, i) => {
                            return (
                                <Flex
                                    zIndex={1}
                                    w="360px"
                                    h="239px"
                                    _hover={{
                                        w: "720px",
                                        h: "478px",
                                    }}
                                    align="flex-end"
                                    objectFit="cover"
                                    key={i}
                                    mx={1}
                                    borderRadius="md"
                                    overflow="hidden"
                                    transition="width 0.5s ease, height 0.5s ease"
                                >
                                    <Img
                                        w="100%"
                                        h="100%"
                                        src={item}
                                        alt={`slide-icon-${i}`}
                                    />
                                </Flex>
                            );
                        })}
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Slider;
