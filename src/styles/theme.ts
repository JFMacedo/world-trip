import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: {
      "100": "#FFBA08",
      "50": "#FFBA0880"
    },
    dark: {
      "900": "#000000",
      "500": "#47585B",
      "100": "#999999",
      "50": "#99999980"
    },
    light: {
      "900": "#FFFFFF",
      "500": "#F5F8FA",
      "100": "#DADADA"
    }
  },
  styles: {
    global: {
      body: {
        bg: "light.500",
        color: "dark.500"
      }
    }
  }
})