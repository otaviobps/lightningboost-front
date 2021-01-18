import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { Routes } from "./routes";
import theme from "./styles/customMuiTheme";
import store from "./providers/Store";
import { Snackbar } from "./components/Snackbar";

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
      <Snackbar />
    </ThemeProvider>
  </Provider>
);

export default App;
