import "typeface-work-sans"

const theme = {
  breakpoints: ["24em", "40em", "48em", "56em"],
  fonts: {
    body: '"Work Sans", sans-serif',
    heading: '"Work Sans", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [14, 16, 20, 24, 32, 48, 64],
  sizes: [0, 4, 8, 12, 16, 24, 32, 48, 64, 128, 256, 320, 400, 512, 720, 960],
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 128, 256, 320, 400, 512, 720, 960],
  radii: [0, 2, 4, 8, 16, 24, 32, 64, 99999],
  borders: {
    default: "1px solid",
  },
  colors: {
    light: "#ffffff",
    dark: "#2e1c43",
    text: "#2e1c43",
    background: "#fff",
    primary: "#9b5de5",
    secondary: "#ffff00",
    muted: "#bea6da",
    muted2: "#f9f4ff",
    hover: "#6f29c2",
    highlight: "rgba(255, 255, 255, 0.2)",
    highlight2: "rgba(255, 255, 255, 0.5)",
    shadow: "rgba(0, 0, 0, 0.2)",
    shadow2: "rgba(0, 0, 0, 0.5)",
    social: {
      facebook: "#1877F2",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "150%",
    },
    h1: {
      fontSize: 4,
    },
    h2: {
      fontSize: 2,
    },
    h3: {
      fontSize: 1,
      mt: 4,
      mb: 2,
    },
    p: {
      my: 4,
    },
    a: {
      color: "primary",
      textDecoration: "none",
      "&:hover": {
        borderBottom: "2px solid",
        borderColor: "primary",
      },
      "&:visited": {
        color: "muted",
        borderColor: "muted",
      },
    },
  },
}

export default theme
