import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // width: "100%",
  // maxWidth: "400px",
}));

export default Item;
