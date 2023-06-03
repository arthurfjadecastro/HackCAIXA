import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const TitleText = styled(Typography)(({ theme }) => ({
    color: "#005CA9",
    height: 70,
  // color: theme.palette.success.main,
}));

export default TitleText;