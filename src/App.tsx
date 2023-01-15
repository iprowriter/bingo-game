import React from 'react';
import Header from './components/Header';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Board from './components/Game/Board';




function App() {
  //make darkmode toggle
  const [checked, setChecked] = React.useState(false);
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
        <Board/>
      </ThemeProvider>
    </>
  );
}

export default App;
