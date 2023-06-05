import React from "react";
import { Grid, Paper, Typography, Button, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { RenderIf } from "../Utils";

const Frame = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffffff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  minWidth: 200,
  maxWidth: 400,
  marginBottom: 16
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

const handleOpenAppiOs = () => {
  window.open('https://apps.apple.com/br/app/caixa/id490813624', '_blank');
};

const handleOpenAppAndroid = () => {
  window.open('https://play.google.com/store/apps/details?id=br.com.gabba.Caixa&hl=pt_BR', '_blank');
};

  
const handleWhatsApp = () => {
  window.open('https://api.whatsapp.com/send?phone=8001040104', '_blank');
};



const CustomFrame = ({img, text, link, textButton}) => {
  return (
    <Frame>
      <Logo src={img} alt="Logo CAIXA" />
      <FrameContent>
        <Text variant="body1">{text}</Text>
      </FrameContent>
      <RenderIf predicate={img === "/img/logocaixa.png"}>
        <Grid container direction={"row"} justifyContent={"right"}>
          <Grid onClick={handleOpenAppiOs} item style={{marginRight: 24, cursor: "pointer"}}>
          <img style={{width: 36, height: 36}} src={"/img/app-store.png"}></img>
          </Grid>
          <Grid item  style={{cursor: "pointer"}}onClick={handleOpenAppAndroid}>
        <img style={{width: 36, height: 36}} src={"/img/google-play.png"}></img>
          </Grid>
        </Grid>
        <Typography style={{color: "black"}}>
          {textButton}
            </Typography>
      
      </RenderIf>
      <RenderIf predicate={img === "/img/whatsappicon.png"}>
      <Button onClick={handleWhatsApp} variant="outlined" color="primary">
        {textButton}
        <ButtonIcon />
      </Button>
      </RenderIf>
    </Frame>
  );
};

export default CustomFrame;