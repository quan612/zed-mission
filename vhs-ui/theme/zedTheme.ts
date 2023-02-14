import { AccordionStyleConfig } from "@vhs-ui/elements/accordion/AccordionStyleConfig";
import { BadgeStyleConfig } from "@vhs-ui/elements/badge/BadgeStyleConfig";
import {
  ButtonStyleConfig,
  GlowButtonStyleConfig,
} from "@vhs-ui/elements/button/ButtonStyleConfig";
import { CarouselBannerStyleConfig } from "@vhs-ui/elements/carouselBanner";
import {
  LinearProgressStyleConfig,
  StepStyleConfig,
} from "@vhs-ui/elements/linearProgress";
import { ModalStyleConfig } from "@vhs-ui/elements/modal/ModalStyleConfig";
import { TabsStyleConfig } from "@vhs-ui/elements/tabs/TabsStyleConfig";
import { RadioStyleConfig } from "@vhs-ui/elements/radio/RadioStyleConfig";

import { TextStyleConfig } from "../elements/text";
import { ProgressStyleConfig } from "@vhs-ui/elements/progress/ProgressStyleConfig";
import SidebarConfig from "./components/sidebar";
import { TableStyleConfig } from "@vhs-ui/elements/table/TableStyleConfig";
import { PageContentStyleConfig } from "@vhs-ui/elements/pageContent/PageContentStyleConfig";
import { AnimatedNumberStyleConfig } from "@vhs-ui/elements/animatedNumber";
import { textStyles } from "./textStyles/textStyles";

/* SPACING
 * The space key allows you to customize the global spacing and sizing scale for your project.
 * By default these spacing value can be referenced by the padding, margin, and top, left, right, bottom styles.
 *
 * By default, Chakra includes a comprehensive numeric spacing scale inspired by Tailwind CSS.
 * The values are proportional, so 1 spacing unit is equal to 0.25rem,
 * which translates to 4px by default in common browsers.
 ! Mental model: If you need a spacing of 40px, divide it by 4. That'll give you 10.
 ! Then use it in your component.
 */
const space = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  4.5: "1.125rem",
  5: "1.25rem",
  5.5: "1.375rem",
  6: "1.5rem",
  6.5: "1.625rem",
  7: "1.75rem",
  7.5: "1.875rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

export const zedTheme = {
  color: {
    success: "rgba(39, 177, 138, 0.28)",
    info: "",
    warning: "rgba(255, 167, 0, 0.28)",
    error: "rgba(227, 38, 54, 0.28)",
  },
  /* COLORS
   * Add a theme.colors object to provide colors for your project. By default these colors can be referenced by
   * the color, borderColor, backgroundColor, fill, stroke, styles.
   */
  colors: {
    transparent: "transparent",
    black: {
      100: "#000",
      200: "#171A1C",
      300: "rgba(236, 241, 251, 0.1)",
      400: "rgba(236, 241, 251, 0.33)",
      500: "rgba(0, 0, 0, 0.8)",
      600: "#373737",
      1100: "#23262c",
    },
    blue: {
      100: "#B3DDFF",
      200: "#699EDC",
      300: "#2D4D73",
      400: "#356AA7",
    },
    brown: {
      500: "#66513E",
      600: "#73442F",
    },
    white: {
      decorative: "rgba(240, 248, 255, 0.12)",
      default: "#fff",
      help: "rgba(240, 248, 255, 0.32)",
      secondary: "rgba(240, 248, 255, 0.64)",
      slight: "rgba(240, 248, 255, 0.04)",
      contentSecondary: "rgba(240, 248, 255, 0.64)",
      400: "#E4E4E4",
      500: "#f0f8ffa3",
      700: "#F0F8FF",
      800: "#ECF1FB",
    },
    gray: {
      300: "#57606C",
      400: "#3b3f46",
      500: "#636464",
      700: "#858F98",
      800: "#2A2E35",
      900: "#292829",
      1000: "#373A42",
      1100: "#22262D",
      1200: "#2a2e35",
      1300: "#18191C",
      1400: "#1F2127",
      1600: "#1E2128",
      1700: "#3b3f47",
    },
    darkgray: {
      500: "#383a41",
    },
    green: {
      200: "#245E52",
      300: "#326373",
      400: "#375B55",
      500: "#317d6c",
      700: "#27b18a",
      900: "#75E1C2",
      1000: "#4DB379",
      glow: "#9cb99c",
      badge: "#0C6451",
    },
    copper: {
      100: "#B09C75",
      200: "#DBCC52",
    },
    cyan: {
      badge: "#31768A",
    },
    indigo: {
      600: "#4E47CC",
    },
    lightBlue: {
      glow: "#c9e9ff",
    },
    orange: {
      300: "#FFD4AE",
      400: "#D4525A",
    },
    red: {
      300: "#F7BFC5",
    },
    purple: {
      200: "#3E336D",
      300: "#CDB3FF",
      500: "#563D6D",
      600: "#6A3259",
      700: "#5E3846",
      polygon: "#8247E5",
    },
    teal: {
      600: "#269C7C",
    },
    background: {
      light: "rgba(34, 38, 45, 0.9)",
      onSurface: "#ECF1FB1A",
      surface1: "#22262D",
      surface2: "#2C3138",
    },
    toastFills: {
      success: "#294c48",
      warning: "#5E4B26",
      error: "#562B35",
    },
    toastBorders: {
      success: "#29A784",
      warning: "#FEA700",
      error: "#E22636",
    },
    gradients: {
      success: "rgba(39, 177, 138, 0.28)",
      info: "",
      warning: "rgba(255, 167, 0, 0.28)",
      error: "rgba(227, 38, 54, 0.28)",
      rainbow:
        "linear-gradient(267.46deg, #563D6D 0%, #66513E 52.11%, #326373 100%)",
      green: "linear-gradient(135deg, #3D675D 0%, #395052 100%)",
      blueGreen: "linear-gradient(90deg, #5871B0 0%, #6CA3A4 100%)",
      greenZed: "linear-gradient(90deg, #27B18A 0%, #317D6C 100%)",
      greenEmerald: "linear-gradient(90deg, #3D675D 0%, #395052 100%)",
      gold: "radial-gradient(45.02% 45.31% at 30.47% 14.84%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(100% 100% at 100% 100%, #946B2F 0%, #887952 100%)",
      black: "linear-gradient(90deg, #2A2E35 0%, #2B3037 6.25%, #41464D 100%)",
      orange: "linear-gradient(90deg, #B7AB7C 0%, #BD5A22 100%)",
      purple: "linear-gradient(90deg, #383082 0%, #7F4089 100%)",
      purpleDark: "linear-gradient(180deg, #2B2942 0%, #23262C 100%)",
      purpleGray:
        "linear-gradient(180deg, rgba(44, 18, 122, 0.6) 16.29%, rgba(45, 3, 84, 0) 94.89%)",
      goldGray:
        "linear-gradient(110.33deg, rgba(234, 146, 31, 0.32) 0%, #2C3138 75%, #2C3138 100%)",
      red: "linear-gradient(90deg, #96464D 0%, #7D1A28 100%)",
      yellow:
        "linear-gradient(270.03deg, rgba(42, 46, 53, 0) 0.03%, rgba(255, 167, 0, 0.28) 100.67%), #292D34",
    },
    yellow: {
      400: "#FFE925",
      500: "#FEE912",
      600: "#E69C3C",
    },
    badges: {
      "needs-upgrade": {
        background: "linear-gradient(90deg, #b7ab7c 0%, #bd5a22 100%)",
        color: "#ffd4ae",
      },
      "in-race": {
        background: "linear-gradient(90deg, #96464d 0%, #7d1a28 100%)",
        color: "#f7bfc5",
      },
      "in-stud": {
        background: "linear-gradient(315deg, #383082 0%, #7f4089 100%)",
        color: "#cdb3ff",
      },
      upgrading: {
        background: "linear-gradient(90deg, #3d675d 0%, #395052 100%)",
        color: "#27b18a",
      },
      "on-sale": {
        background: "linear-gradient(135deg, #3d675d 0%, #395052 100%)",
        color: "#27b18a",
      },
      "race-ready": {
        background: "linear-gradient(315deg, #b7ab7c 0%, #bd5a22 100%)",
        color: "#ffd4ae",
      },
      prepared: {
        background: "linear-gradient(135deg, #2a2e35 0%, #41464d 100%)",
        color: "white",
      },
      trial: {
        background: "linear-gradient(135deg, #3d675d 0%, #395052 100%)",
        color: "#27b18a",
      },
      "trial-expired": {
        background:
          "linear-gradient(90deg, #2a2e35 0%, #2b3037 6.25%, #41464d 100%)",
        color: "rgba(240, 248, 255, 0.64)",
      },
    },
  },
  font: {
    primaryFamily: "Montserrat",
    primaryStyle: "normal",
    primaryWeight: "bold",
    primarySize: "16px",
    secondarySize: "14px",
    secondaryWeight: "500",
  },
  fonts: {
    "*": "Montserrat",
    body: "system-ui, sans-serif",
    heading: "Montserrat",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  textStyles,
  components: {
    LinearProgress: LinearProgressStyleConfig,
    ProgressStep: StepStyleConfig,
    Button: ButtonStyleConfig,
    GlowButton: GlowButtonStyleConfig,
    Badge: BadgeStyleConfig,
    Carousel: CarouselBannerStyleConfig,
    Modal: ModalStyleConfig,
    Tabs: TabsStyleConfig,
    Drawer: SidebarConfig,
    Accordion: AccordionStyleConfig,
    Text: TextStyleConfig,
    Progress: ProgressStyleConfig,
    Radio: RadioStyleConfig,
    Table: TableStyleConfig,
    PageContent: PageContentStyleConfig,
    AnimatedNumber: AnimatedNumberStyleConfig,
  },
  styles: {
    global: {
      body: {
        fontFamily: "",
        color: "",
        bg: "",
        lineHeight: "",
      },
      "*::placeholder": {
        color: "",
      },
      "*, *::before, &::after": {
        borderColor: "",
        wordWrap: "",
      },
    },
  },
  // Properties below needs to be normalized using
  // the function normalizeSizing on @/utils/index.js
  fontSizes: {
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  space,
  sizes: {
    ...space,
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  /* BORDER RADIIUS
   * Default Chakra corner radius values.
   */
  radii: {
    0: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
};

const { fontSizes, lineHeights, radii, sizes } = zedTheme;

export const themePropertiesThatMustBeNormalized = [
  {
    name: "fontSizes",
    value: fontSizes,
  },
  {
    name: "lineHeights",
    value: lineHeights,
  },
  {
    name: "space",
    value: space,
  },
  {
    name: "sizes",
    value: sizes,
  },
  {
    name: "radii",
    value: radii,
  },
];
