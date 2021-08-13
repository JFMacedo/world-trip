import Link from 'next/link'
import { Button, Grid, GridItem, Image } from "@chakra-ui/react";

type HeaderProps = {
  backButton?: boolean
}

export function Header({ backButton }: HeaderProps) {
  return (
    <Grid
      as="header"
      templateColumns="repeat(3, 1fr)"
      w="100%"
      maxW="1160px"
      h="100px" py="7"
      mx="auto"
    >
      <GridItem>
        { backButton && (
          <Link href="/">
            <Button variant="unstyled">
              <Image src="./images/back-button.svg" alt="Botão voltar" />
            </Button>
          </Link>
        ) }
      </GridItem>
      <Image src="./images/logo.svg" alt="Logo" h="full" mx="auto" />
    </Grid>
  )
}