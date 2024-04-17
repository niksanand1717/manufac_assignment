import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider } from "@mantine/core";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // imported MantineProvider to share the defined theme to
  // whole web app
  <React.StrictMode>
    <MantineProvider
      // defining theme for the app with custom colors type and
      // color palette, shadows, fontSizes, headings etc.
      theme={{
        colorScheme: "light",
        colors: {
          // Add your color
          "deep-blue": ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
          // or replace default theme color
          blue: ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
          myColorPalette: [
            "#F6F5F2",
            "#F0EBE3",
            "#F3D0D7",
            "#FFEFEF",
            "#7AA2E3",
          ],
        },

        shadows: {
          // other shadows (xs, sm, lg) will be merged from default theme
          md: "1px 1px 3px rgba(0,0,0,.25)",
          xl: "5px 5px 3px rgba(0,0,0,.25)",
        },

        fontSizes: {
          xs: 12,
          sm: 15,
          md: 20,
          lg: 25,
          xl: 30,
        },

        headings: {
          fontFamily: "Roboto, sans-serif",
          sizes: {
            h1: { fontSize: 30 },
          },
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
