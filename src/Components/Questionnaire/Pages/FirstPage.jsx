import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { TitleText } from "./Resources";
import {CellPhoneNumber, Cpf} from "../../Inputs";
import {ButtonCEF, ButtonSimulateOther} from "../../Buttons";
import api from "../../../services/api";
import axios from "axios";
// import UniformTextField from "../../Inputs/InputCPF";


function FirstPage() {

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
            Informe seu CPF e Telefone
          </TitleText>
        </Grid>
        <Grid item>
          <Item>
            <Cpf/>
          </Item>
          <Item>
            <CellPhoneNumber/>
          </Item>
        </Grid>
        <Grid item>
        <Item>
          <ButtonCEF/>

        </Item>
        <Item>
          
          <ButtonSimulateOther/>
        </Item>
        </Grid>
      </Grid>
     </>
  );
}

export default FirstPage;