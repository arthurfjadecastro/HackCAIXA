import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const TitleText = styled(Typography)(({ theme }) => ({
    color: "#005CA9",
    height: 70,
    fontWeight: "bold !important",
    // color: "#fff",
    textTransform: "uppercase" ,
    letterSpacing: 2 ,
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" ,
    textAlign: "center"
}));

export default TitleText;


   