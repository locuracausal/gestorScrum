import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { LanguageContextProvider } from "./Context/index";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#008577",
      dark: "#00574B",
    },
    secondary: {
      main: "#00574B",
    },
  },
});

ReactDOM.render(
  <LanguageContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </LanguageContextProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
