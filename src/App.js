import RoutesProvider from "./routes/RoutesProvides";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { myTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={responsiveFontSizes(createTheme(myTheme))}>
        <RoutesProvider />
      </ThemeProvider>
    </>
  );
}

export default App;
