import React from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF } from "../../Buttons";
import { Frame, FramePaper } from "../../Frames";
import Item from "../../Frames/Item";

const FifthPage = ({}) => {


  return (
    <>
          <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacin={4}
      >
        <Grid item>
          <TitleText>
            Pronto! Simulação feita com sucesso.
          </TitleText>
        </Grid>
        <Grid item style={{flex: 2,width: "100%"}}>
          <Item>
          <Frame/>
          <p
            style={{
              fontSize: "12px",
              textAlign: "center",
              marginTop: "49px",
            }}
          >
            Acesse o aplicativo e faça seu financiamento ou fale com um gerente.
          </p>
          <FramePaper/>
          <FramePaper/>
          </Item>
        </Grid>
        <Grid item>
        <Item>
          <ButtonCEF/>
        </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default FifthPage;




