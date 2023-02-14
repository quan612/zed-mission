import React, { useState } from "react";
import { useWindowEventListener } from "rooks";
import { extendTheme } from "@chakra-ui/react";

import { themePropertiesThatMustBeNormalized, zedTheme } from "./zedTheme";

const BREAKPOINTS = [
  // According to @/assets/styles/_base.scss
  {
    screen: "mobile",
    value: 360,
    fontSizeMultiplier: 2.0618556701,
  },
  {
    screen: "mobile-lg",
    value: 425,
    fontSizeMultiplier: 1.6,
  },
  {
    screen: "tablet",
    value: 768,
    fontSizeMultiplier: 1.76991150442,
  },
  {
    screen: "laptop-sm",
    value: 890,
    fontSizeMultiplier: 2.77777777778,
  },
  {
    screen: "laptop",
    value: 1024,
    fontSizeMultiplier: 2.40963855422,
  },
  {
    screen: "laptop-lg",
    value: 1280,
    fontSizeMultiplier: 2.0618556701,
  },
  {
    screen: "laptop-xl",
    value: 1440,
    fontSizeMultiplier: 1.76991150442,
  },
];

export const normalizeThemeProperties = () => {
  const normalizeSizing = (object) => {
    if (typeof window !== "undefined") {
      // browser code
      const windowWidth = window !== undefined && window?.innerWidth;
      const multiplier =
        BREAKPOINTS.find((breakpoint) => breakpoint.value >= windowWidth)
          ?.fontSizeMultiplier || 1.6;
      const result = Object.entries(object).reduce(
        (p, [key, value]) => ({
          ...p,
          ...(typeof value === "string" && value.includes("rem")
            ? { [key]: `${Number(value.slice(0, -3)) * multiplier}rem` }
            : { [key]: value }),
        }),
        {}
      );
      return result;
    }
  };

  const normalizedProperties = themePropertiesThatMustBeNormalized.reduce(
    (acc, property) => {
      acc[property.name] = normalizeSizing(property.value);
      return acc;
    },
    {}
  );
  return extendTheme({ ...zedTheme, ...normalizedProperties });
};

const useZedTheme = () => {
  const [theme, setTheme] = useState(normalizeThemeProperties());

  useWindowEventListener("resize", () => {
    setTheme(normalizeThemeProperties());
  });

  return theme;
};

export default useZedTheme;
