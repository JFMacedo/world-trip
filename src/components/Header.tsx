import { Button, Grid, GridItem, Image } from "@chakra-ui/react";

type HeaderProps = {
  backButton?: boolean
}

export function Header({ backButton }: HeaderProps) {
  return (
    <Grid
      as="header"
      templateColumns="repeat(3, 1fr)"
      maxW="1160px"
      h="100px" py="7"
      mx="auto"
    >
      <GridItem>
        { backButton && (
          <Button variant="unstyled">
            <Image src="./images/back-button.svg" alt="Botão voltar" />
          </Button>
        ) }
      </GridItem>
      <Image src="./images/logo.svg" alt="Logo" h="full" mx="auto" />
    </Grid>
  )
}