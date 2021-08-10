import { Box, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Box
        as="section"
        w="100%"
        p="20"
        bg="url('https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2105&q=80')"
        bgSize="cover"
        bgPosition="0 -450px"
      >
        <Box pos="relative" maxW="1160px" mx="auto">
          <Flex flexDir="column">
            <Text color="light.500" fontSize="4xl" fontWeight="500">
              5 Continentes,<br /> infinitas possibilidades.
            </Text>
            <Text maxW="450px" color="light.100" mt="5">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
          <Image
            position="absolute"
            right="0"
            bottom="-115px"
            src="./images/airplane.svg"
          />
        </Box>
      </Box>
      <Flex
        justify="space-between"
        as="section"
        w="100%"
        maxW="1160px"
        mx="auto"
        mt="28"
        mb="20"
      >
        <Stack spacing="6" align="center">
          <Image src="./images/cocktail.svg" h="85px" />
          <Text fontSize="2xl" fontWeight="600">vida noturna</Text>
        </Stack>
        <Stack spacing="6" align="center">
          <Image src="./images/surf.svg" h="85px" />
          <Text fontSize="2xl" fontWeight="600">praia</Text>
        </Stack>
        <Stack spacing="6" align="center">
          <Image src="./images/building.svg" h="85px" />
          <Text fontSize="2xl" fontWeight="600">moderno</Text>
        </Stack>
        <Stack spacing="6" align="center">
          <Image src="./images/museum.svg" h="85px" />
          <Text fontSize="2xl" fontWeight="600">clássico</Text>
        </Stack>
        <Stack spacing="6" align="center">
          <Image src="./images/earth.svg" h="85px" />
          <Text fontSize="2xl" fontWeight="600">e mais...</Text>
        </Stack>
      </Flex>
      <Box w="88px" mx="auto">
        <Divider borderWidth="1px" borderColor="dark.500" />
      </Box>
      <Box>
        <Text my="14" fontSize="4xl" fontWeight="500" textAlign="center">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Box>
      <Slider />
    </Flex>
  )
}
