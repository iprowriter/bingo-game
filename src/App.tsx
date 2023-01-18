import React from "react";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Board from "./components/Game/Board";
import { Grid } from "@mui/material";

function App() {
  //make darkmode toggle
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const darkTheme = createTheme({
    palette: {
      mode: checked ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header checked={checked} handleChange={handleChange} />

        <Grid
          container
          alignItems="center"
          justifyItems="center"
          direction="column"
          marginTop={10}
        >
          <Grid item>
            <Board />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
