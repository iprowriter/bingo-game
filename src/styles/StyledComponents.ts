import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

//StyledPaper component is used as the main background for the board cells
export const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  width: 700,
  display: "grid",
  gridGap: 10,
  gridTemplateColumns: "repeat(5, 130px)",
  gridTemplateRows: "repeat(5, 130px)",
}));

//StyledPaperCell is used to build the grid for the cells
export const StyledPaperCell = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  cursor: "pointer",
  
}));

//StyledTypographyCenter is used Typography to center the items
export const StyledTypographyCenter = styled(Typography)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid #000",
  borderRadius: 50,
}));

//StyledTypographyIndex is used to define the CSS for the item index
export const StyledTypographyIndex = styled(Typography)(() => ({
  position: "absolute",
  fontSize: 10,
  top: 0,
  right: 5,
}));
