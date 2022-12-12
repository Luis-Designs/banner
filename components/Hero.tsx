import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={"80vh"}
      backgroundImage={
        "url(http://drive.google.com/uc?export=view&id=1hnpEiWGf7-NqOpP4OhRDqXwD1PgTPsK7)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center left"}
    >
      <VStack
        w={"full"}
        align={"left"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Observatorio Joven: Una iniciativa del CMPJ
          </Text>
          <Stack direction={"row"}>
            <Text
              color={"white"}
              fontWeight={300}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
            >
              La construcción de un observatorio joven resulta relevante porque
              permite visibilizar las necesidades y demandas que enfrenta la
              población joven dentro de cada región de cada región del país, lo
              cual permitía la construcción de proyectos y politicas locales en
              favor de las juventudes
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Button
              bg={"whiteAlpha.300"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Más información
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
