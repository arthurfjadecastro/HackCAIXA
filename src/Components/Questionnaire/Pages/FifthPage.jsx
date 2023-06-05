import React, { useEffect, useState } from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF } from "../../Buttons";
import { Frame, FramePaper } from "../../Frames";
import Item from "../../Frames/Item";
import { RenderIf } from "../../Utils";

const FifthPage = ({setClose,ETLData, state, page}) => {
  

  return (
    <>
          <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <TitleText>
            Pronto! Simulação feita com sucesso.
          </TitleText>
        </Grid>
        <Grid item style={{flex: 2,width: "100%"}}>
          <Item>
          <RenderIf predicate={state.typeInstallments === "PRICE"}>
          <Frame installments={state.installments} lastInstallment={ETLData && ETLData.PRICE ? ETLData.PRICE[ETLData.PRICE.length - 1].valorPrestacao : null} valueFirstInitialInstallment={ETLData.PRICE ? ETLData.PRICE[0].valorPrestacao : null} initialInstallment={ETLData && ETLData.PRICE ? ETLData.PRICE[0]?.numero : null} value={state.monetaryValue}/>
          </RenderIf> 
          <RenderIf predicate={state.typeInstallments === "SAC"}>
          <Frame installments={state.installments} lastInstallment={ETLData && ETLData.SAC ? ETLData.SAC[ETLData.SAC.length - 1].valorPrestacao : null} valueFirstInitialInstallment={ETLData.SAC ? ETLData.SAC[0].valorPrestacao : null} initialInstallment={ETLData && ETLData.PRICE ? ETLData.PRICE[0]?.numero : null} value={state.monetaryValue}/>
          </RenderIf> 
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
        <ButtonCEF page={page} setClose={setClose} buttonTitle={"Concluir"} isContinueButtonEnabled={true} handlePageChange={setClose} />
        </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default FifthPage;




