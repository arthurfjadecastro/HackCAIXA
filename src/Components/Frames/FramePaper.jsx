import React from "react";
import { Grid, Paper, Typography, Button, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Frame = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffffff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
}));

const Logo = styled("img")({
  marginRight: "16px",
  width: "50px",
});

const FrameContent = styled("div")({
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
});

const Text = styled(Typography)({
  textAlign: "left",
  marginRight: "16px",
});

const ButtonIcon = styled(ArrowForwardIcon)({
  marginLeft: "8px",
});

const CustomFrame = () => {
  return (
    <Frame>
      <Logo src={"/img/logocaixa.png"} alt="Logo CAIXA" />
      <FrameContent>
        <Text variant="body1">Contrate no aplicativo CAIXA</Text>
      </FrameContent>
      <Button variant="outlined" color="primary">
        Saiba mais
        <ButtonIcon />
      </Button>
    </Frame>
  );
};

export default CustomFrame;