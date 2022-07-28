import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    600: string;
    500: string;
    400: string;
    300: string;
    200: string;
    100: string;
  }

  interface CustomPalette {
    structural: {
      white: string;
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
    accent: {
      color1: string;
      color2: string;
    };
  }
  interface CustomTypography {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface TypographyVariants extends CustomTypography {}
  interface TypographyVariantsOptions extends CustomTypography {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0B6D62",
      "600": "#0B6D62",
      "500": "#1B877A",
      "400": "#30A193",
      "300": "#4ABAAD",
      "200": "#77EDDF",
      "100": "#B2FFF6",
    },
    text: {
      primary: "#373C38",
      secondary: "#656E66",
      disabled: "#94A196",
    },
    grey: {
      "400": "#D6D6D6",
      "200": "#E9EBE9",
      "100": "#F7F7F7",
    },
    structural: {
      white: "#FFFFFF",
      color1: "#E8FFFC",
      color2: "#E7FCE0",
      color3: "#F5FFF7",
      color4: "#EFFFFD",
    },
    accent: {
      color1: "#ED8F02",
      color2: "#FF725E",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "48px",
    },
    h2: {
      fontSize: "20px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "30px",
    },
    h3: {
      fontSize: "20px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "30px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "22px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "22px",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "24px",
    },
    subtitle2: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
    },
    caption1: {
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "16px",
    },
    caption2: {
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "16px",
    },
  },
});

export const EXTRA_COLORS = {
  background: {
    linear1: "linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)",
    linear2: "linear-gradient(143.84deg, #E0FFE5 0%, #FFFAEA 102.58%)",
  },
};
