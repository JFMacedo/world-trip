import { Box, Flex, Grid, GridItem, Image, Stack, Text, Tooltip } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Contnent() {
  return (
    <Flex direction="column">
    <Header backButton />
    <Flex
        as="section"
        w="100%"
        h="500px"
        p="14"
        bg="url('https://images.unsplash.com/photo-1493707553966-283afac8c358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')"
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
            Europa
          </Text>
        </Box>
      </Flex>
      <Flex as="section" align="center" w="100%" maxW="1160px" mx="auto" my="20">
        <Text fontSize="2xl" maxW="600px" textAlign="justify">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex flex="1" justify="space-between" ml="16">
          <Stack spacing="-0.5" align="center">
            <Text fontSize="5xl" fontWeight="600" color="highlight.100">50</Text>
            <Text fontSize="2xl" fontWeight="600">países</Text>
          </Stack>
          <Stack spacing="-0.5" align="center">
            <Text fontSize="5xl" fontWeight="600" color="highlight.100">60</Text>
            <Text fontSize="2xl" fontWeight="600">línguas</Text>
          </Stack>
          <Stack spacing="-0.5" align="center">
            <Text fontSize="5xl" fontWeight="600" color="highlight.100">27</Text>
            <Flex align="baseline">
            <Text fontSize="2xl" fontWeight="600">
              cidades +100
            </Text>
            <Text fontSize="md" color="dark.100" ml="1">
              <Tooltip
                fontSize="sm"
                fontWeight="400"
                label="Londres, Paris, Roma, Praga, Amsterdã"
                aria-label="Cidades"
              >
                ⓘ
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
        <GridItem
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
            src="https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80"
          />
          <Flex align="center" justify="space-between" p="6">
            <Stack>
              <Text fontSize="xl" fontWeight="600">Londres</Text>
              <Text color="dark.100">Reino Unido</Text>
            </Stack>
            <Image
              w="30px"
              h="30px"
              objectFit="cover"
              borderRadius="full"
              src="https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/grabretanha_R.gif"
            />
          </Flex>
        </GridItem>
        <GridItem
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
            src="https://images.unsplash.com/photo-1471874708433-acd480424946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          />
          <Flex align="center" justify="space-between" p="6">
            <Stack>
            <Text fontSize="xl" fontWeight="600">Paris</Text>
              <Text color="dark.100">França</Text>
            </Stack>
            <Image
              w="30px"
              h="30px"
              objectFit="cover"
              borderRadius="full"
              src="https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/franca_R.gif"
            />
          </Flex>
        </GridItem>
        <GridItem
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
            src="https://images.unsplash.com/photo-1555992828-ca4dbe41d294?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
          <Flex align="center" justify="space-between" p="6">
            <Stack>
            <Text fontSize="xl" fontWeight="600">Roma</Text>
              <Text color="dark.100">Itália</Text>
            </Stack>
            <Image
              w="30px"
              h="30px"
              objectFit="cover"
              borderRadius="full"
              src="https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/italia_R.gif"
            />
          </Flex>
        </GridItem>
        <GridItem
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
            src="https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" />
          <Flex align="center" justify="space-between" p="6">
            <Stack>
            <Text fontSize="xl" fontWeight="600">Praga</Text>
              <Text color="dark.100">República Tcheca</Text>
            </Stack>
            <Image
              w="30px"
              h="30px"
              objectFit="cover"
              borderRadius="full"
              src="https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/checa_R.gif"
            />
          </Flex>
        </GridItem>
        <GridItem
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
            src="https://images.unsplash.com/photo-1579870874424-5dbded81868b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
          <Flex align="center" justify="space-between" p="6">
            <Stack>
            <Text fontSize="xl" fontWeight="600">Amsterdã</Text>
              <Text color="dark.100">Holanda</Text>
            </Stack>
            <Image
              w="30px"
              h="30px"
              objectFit="cover"
              borderRadius="full"
              src="https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/holanda_R.gif"
            />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  )
}