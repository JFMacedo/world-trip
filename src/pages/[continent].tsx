import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
    </Flex>
  )
}