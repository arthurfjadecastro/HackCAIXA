import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';


const UniformTextField = styled(TextField)(({ theme }) => ({
    color: "#005CA9",
    height: 70,
  // color: theme.palette.success.main,
}));

export default UniformTextField;


