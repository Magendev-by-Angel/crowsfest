import { Box, Grid, Stack, Img } from "@chakra-ui/react";

interface ImageComponentProps {
  src: string;
}
const ImageComponent = ({ src }: ImageComponentProps) => {
  return <Img src={src} />;
};

const Gallery = () => {
  return <Box>Gallery</Box>;
};

export default Gallery;
