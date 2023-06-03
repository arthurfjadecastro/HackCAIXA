import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { TitleText } from "./Resources";


function FirstPage() {
 
  

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacint={4}
      >
        <Grid item>
          <TitleText>
            Informe seu CPF e Telefone
          </TitleText>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex" }}>
            Body
          </Typography>
        </Grid>
        <Grid item>
          Fotter Buttons
        </Grid>
      </Grid>
     </>
  );
}

export default FirstPage;