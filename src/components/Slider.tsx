import Link from "next/link"
import { Flex, Text } from "@chakra-ui/react"

import SwiperCore, { Navigation, Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Navigation, Pagination, A11y])

export function Slider(data) {
  const continents = data.continents

  return (
    <Flex
      w="100%"
      maxW="1160px"
      h="450px"
      mx="auto"
      mb="5"
    >
      <Swiper
        slidesPerView={ 1 }
        navigation
        pagination={ { clickable: true } }
        style={ { width: "100%", flex: "1" } }
      >
        { continents.map(continent => {(
          <SwiperSlide key={ continent.slug }>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url(${continent.image})`}
              bgSize="cover"
              bgPosition="center"
              textAlign="center"
              textShadow="0px 1px 3px black"
            >
              <Link href={`/${ continent.slug }`}>
                <a>
                  <Text fontSize="5xl" fontWeight="700" color="light.900">
                    { continent.name }
                  </Text>
                  <Text fontSize="2xl" fontWeight="700" color="light.500">
                    { continent.callToAction }
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        )}) }
      </Swiper>
    </Flex>
  );
};
