import React from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF, Carousel } from "../../Buttons";
import Item from "../../Frames/Item";



const ThirdPage = ({}) => {
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
            Em quantas vezes gostaria de pagar?
          </TitleText>
        </Grid>
        <Grid item style={{flex: 2,width: "100%"}}>
          <Item>
          <Carousel/>
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

export default ThirdPage;