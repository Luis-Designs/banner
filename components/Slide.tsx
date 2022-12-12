import {
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface CardInfoProps {
  title: string;
  image: string;
  alt_image: string;
  content_body: string;
}

const CardInfo = ({ title, image, content_body, alt_image }: CardInfoProps) => {
  return (
    <Card maxW={"250px"} mb={10} rounded={0}>
      <CardBody>
        <Image src={image} alt={alt_image} borderRadius="lg" boxSize="100px" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text size="xs">{content_body} </Text>
        </Stack>
      </CardBody>
      <Box bg="purple.500" h="5px" />
      <Divider />
    </Card>
  );
};

const data = {
  title: "Observatorio",
  image: "https://robohash.org/1",
  alt_image: "robo",
  content_body:
    "La construcción de un observatorio joven resulta relevante porque permite visibilizar las necesidades y demandas que enfrenta la población joven dentro de cada región de cada región del país.",
};

const Slide = () => {
  return (
    <Flex justify={"space-around"} px={useBreakpointValue({ base: 4, md: 8 })}>
      <CardInfo {...data} />
      <CardInfo {...data} />
      <CardInfo {...data} />
      <CardInfo {...data} />
    </Flex>
  );
};

export default Slide;
