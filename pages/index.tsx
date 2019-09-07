import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Dashboard from "./app/dashboard";
import theme from "./theme";

export default function Index() {
  return (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Dashboard />
  </ThemeProvider>
  );
}
