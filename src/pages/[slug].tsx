import { Box, Flex, Grid, GridItem, Image, Stack, Text, Tooltip } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Contnent({ response }) {
  return (
    <Flex direction="column">
    <Header backButton />
    <Flex
        as="section"
        w="100%"
        h="500px"
        p="14"
        bg={ `url(${ response[0].image })` }
        bgSize="cover"
        bgPosition="center"
      >
        <Box w="100%" maxW="1160px" alignSelf="end" mx="auto">
          <Text
            fontSize="5xl"
            fontWeight="700"
            color="light.900"
            textShadow="0px 1px 3px black"
          >
            { response[0].name }
          </Text>
        </Box>
      </Flex>
      <Flex as="section" align="center" w="100%" maxW="1160px" mx="auto" my="20">
        <Text fontSize="2xl" maxW="600px" textAlign="justify">
        { response[0].description }
        </Text>
        <Flex flex="1" justify="space-between" ml="16">
          <Stack spacing="-0.5" align="center">
            <Text fontSize="5xl" fontWeight="600" color="highlight.100">
              { response[0].countries }
            </Text>
            <Text fontSize="2xl" fontWeight="600">países</Text>
          </Stack>
          <Stack spacing="-0.5" align="center">
            <Text fontSize="5xl" fontWeight="600" color="highlight.100">
              { response[0].languages }
            </Text>
            <Text fontSize="2xl" fontWeight="600">línguas</Text>
          </Stack>
          <Stack spacing="-0.5" align="center">
            <Text fontSize="5xl" fontWeight="600" color="highlight.100">
              { response[0].topCities.length }
            </Text>
            <Flex align="baseline">
            <Text fontSize="2xl" fontWeight="600">
              cidades +100
            </Text>
            <Text fontSize="md" color="dark.100" ml="1">
              <Tooltip
                fontSize="sm"
                fontWeight="400"
                label="Cidades que estão entre as 100 mais visitadas!"
                aria-label="Cidades"
              >
                info
              </Tooltip>
            </Text>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <Text w="100%" maxW="1160px" mx="auto" fontSize="5xl" fontWeight="500">
        Cidades +100
      </Text>
      <Grid
        gridTemplateColumns="repeat(4, 1fr)"
        gap="12"
        w="100%"
        maxW="1160px"
        mx="auto"
        my="20"
      >
        { response[0].topCities.map(city => (
        <GridItem
          key={ city.name }
          bgColor="light.900"
          borderWidth="1px"
          borderColor="highlight.100"
          borderRadius="4px"
          fontFamily="Barlow"
        >
          <Image
            w="100%"
            h="44"
            objectFit="cover"
            src={ city.image }
          />
          <Flex align="center" justify="space-between" p="6">
            <Stack>
              <Text fontSize="xl" fontWeight="600">{ city.name }</Text>
              <Text color="dark.100">{ city.countrie }</Text>
            </Stack>
            <Image
              w="30px"
              h="30px"
              objectFit="cover"
              borderRadius="full"
              src={ city.flag }
            />
          </Flex>
        </GridItem>
        )) }
      </Grid>
    </Flex>
  )
}

export const getStaticPaths = async () => {
  const continents = await fetch("http://localhost:3333/continents")
    .then(response => response.json())

  const paths = continents.map(continent => {
    return { params: { slug: continent.slug } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  const response = await fetch(`http://localhost:3333/continents?slug=${slug}`)
    .then(response => response.json())

  return {
    props: {
      response
    }
  }
}