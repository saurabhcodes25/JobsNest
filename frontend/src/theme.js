import { createTheme } from "@mui/material/styles";
import { deepPurple, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: deepPurple[800],
    },
  },
});
