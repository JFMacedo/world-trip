import Link from "next/link"
import { Flex, Text } from "@chakra-ui/react";

import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, A11y]);

export function Slider() {
  return (
    <Flex
      w="100%"
      maxW="1160px"
      h="450px"
      mx="auto"
      mb="5"
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={ { width: "100%", flex: "1" } }
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('https://images.unsplash.com/photo-1493707553966-283afac8c358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
            textShadow="0px 1px 3px black"
          >
            <Link href="/continent/europe">
              <a>
                <Text fontSize="5xl" fontWeight="700" color="light.900">
                  Europa
                </Text>
                <Text fontSize="2xl" fontWeight="700" color="light.500">
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('https://images.unsplash.com/photo-1524598006180-eddbaa4db69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
            textShadow="0px 1px 3px black"
          >
            <Link href="/continent/europe">
              <a>
                <Text fontSize="5xl" fontWeight="700" color="light.900">
                  Asia
                </Text>
                <Text fontSize="2xl" fontWeight="700" color="light.500">
                  O maior dos continentes.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
