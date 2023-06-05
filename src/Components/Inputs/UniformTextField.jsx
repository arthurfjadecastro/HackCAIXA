import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';


const UniformTextField = styled(TextField)(({ theme }) => ({
    color: "#005CA9",
    height: 70,
    userSelect: "contain" /* Likely future */,
    width: "100%",
    maxWidth: "initial",
    minWidth: "auto",
    margin: 0,
    fontSize:"1rem",
    maxWidth: 400
  // color: theme.palette.success.main,
}));

export default UniformTextField;


