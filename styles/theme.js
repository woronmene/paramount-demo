import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/ButtonStyles";
import { InputStyles as Input } from "./components/InputStyles";
import { HeadingStyles as Heading } from "./components/HeadingStyles";
import { TextStyles as Text } from "./components/TextStyles";
import { IconButtonStyles as IconButton } from "./components/IconButtonStyles";
import { tabsTheme } from "./components/TabStyles";

export const myNewTheme = extendTheme({
  colors: {
    neutralDark: "#222222",
    neutralMedium: "#575757",
    neutralLight: "#838383",
    neutralExtraLight: "#D9D9D9",
    brandColorDark: "#53389E",
    brandColorLight: "#EEEBF5",
    accentBlue: "#3378FF",
    feedbackCritical: "#D82C0D",
  },
  components: {
    Button,
    Input,
    Heading,
    Text,
    IconButton,
    Tabs: tabsTheme,
    fonts: {
      heading: `'SF Pro', sans-serif`,
      body: `'SF Pro', sans-serif`,
    },
  },
});
