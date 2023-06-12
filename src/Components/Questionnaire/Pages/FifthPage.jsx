import React, { useEffect, useState } from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper, styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF, ButtonWhatsApp } from "../../Buttons";
import { Frame, FramePaper } from "../../Frames";
import Item from "../../Frames/Item";
import { RenderIf } from "../../Utils";
import { ProgressStepper } from "../../Dialogs/Resources";

const FifthPage = ({ activeStep,setClose, ETLData, state, page, activeButton, selectedOption }) => {

  
  return (
    <>
        <ProgressStepper activeStep={activeStep}/>
       <Grid item style={{ display: "flex", justifyContent: "center",flexDirection: "column" }}>
          <TitleText>
            Pronto! <br></br>Simulação feita com sucesso.
          </TitleText>
        </Grid>
        <Grid
          item
          style={{
            flex: 2,
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <RenderIf predicate={state.typeInstallments === "PRICE"}>
            <Frame
              installments={state.installments}
              lastInstallment={
                ETLData && ETLData[activeButton]
                  ? ETLData[activeButton][selectedOption - 1].valorPrestacao
                  : null
              }
              valueFirstInitialInstallment={
                ETLData[activeButton] ? ETLData[activeButton][0].valorPrestacao : null
              }
              initialInstallment={
                ETLData && ETLData[activeButton] ? ETLData[activeButton][0]?.numero : null
              }
              value={state.monetaryValue}
            />
          </RenderIf>
          <RenderIf predicate={state.typeInstallments === "SAC"}>
            <Frame
              installments={state.installments}
              lastInstallment={
                ETLData && ETLData[activeButton]
                  ? ETLData[activeButton][selectedOption- 1].valorPrestacao
                  : null
              }
              valueFirstInitialInstallment={
                ETLData[activeButton] ? ETLData[activeButton][0].valorPrestacao : null
              }
              initialInstallment={
                ETLData && ETLData[activeButton] ? ETLData[activeButton][0]?.numero : null
              }
              value={state.monetaryValue}
            />
          </RenderIf>
          <p
  style={{
    fontSize: "16px",
    textAlign: "center",
    margin: 16,
    fontWeight: "bold",
    lineHeight: "1.5",
  }}
>
 
 Acesse o aplicativo para fazer  <br />
  <span style={{ color: "#FF6600" }}>seu financiamento </span>

   ou <span style={{ color: "#FF6600" }}> fale com um gerente   </span>
</p>


          <FramePaper
          variant="googlePlay"
          textButton={"Android"}
          />
           <FramePaper
            variant="iOS"
            textButton={"Apple"}
          />

           <FramePaper
            variant="whatsapp"
            textButton={"Fale com um Gerente"}
          />
        </Grid>
    </>
  );
};

export default FifthPage;
