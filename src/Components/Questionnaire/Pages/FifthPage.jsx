

import React from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF } from "../../Buttons";
import { Frame, FramePaper } from "../../Frames";

const FifthPage = ({}) => {
  
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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




