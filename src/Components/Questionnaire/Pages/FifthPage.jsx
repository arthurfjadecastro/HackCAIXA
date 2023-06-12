import React, { useEffect, useState } from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper, styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF, ButtonWhatsApp } from "../../Buttons";
import { Frame, FramePaper } from "../../Frames";
import Item from "../../Frames/Item";
import { RenderIf } from "../../Utils";
import { ProgressStepper } from "../../Dialogs/Resources";

const FifthPage = ({
  activeStep,
  setClose,
  ETLData,
  state,
  page,
  activeButton,
  selectedOption,
}) => {
  // const parcelas = ETLData && ETLData[activeButton] && ETLData[activeButton][`parcelas${selectedOption}`];
  console.log("ultima pagina")
  console.log(ETLData)
  console.log(activeButton)
  const parcelasKey = `parcelas${selectedOption}`;
      const firstInstallment = ETLData[activeButton]?.[parcelasKey]?.[0];
      const lastInstallment =
        ETLData[activeButton]?.[parcelasKey]?.[selectedOption - 1] || {};
  // console.log(parcelas)
  return (
    <>
      <ProgressStepper activeStep={activeStep} />
      <Grid
        item
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
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
        {/* <RenderIf predicate={activeButton === "PRICE"}> */}
                  <Frame
            installments={state.installments}
            lastInstallment={
              ETLData && lastInstallment.valorPrestacao
            }
            valueFirstInitialInstallment={
              ETLData[activeButton] ? firstInstallment.valorPrestacao : null
            }
            initialInstallment={
              ETLData && firstInstallment.numero
            }
            value={state.monetaryValue}
          />

        {/* </RenderIf> */}
        {/* <RenderIf predicate={activeButton === "SAC"}>
          <Frame
            installments={state.installments}
            lastInstallment={
              ETLData && lastInstallment
            }
            valueFirstInitialInstallment={
              ETLData[activeButton]
                ? firstInstallment.valorPrestacao
                : null
            }
            initialInstallment={
              ETLData && firstInstallment.numero
            }
            value={state.monetaryValue}
          />
        </RenderIf> */}
        <p
          style={{
            fontSize: "16px",
            textAlign: "center",
            margin: 16,
            fontWeight: "bold",
            lineHeight: "1.5",
          }}
        >
          Acesse o aplicativo para fazer <br />
          <span style={{ color: "#FF6600" }}>seu financiamento </span>
          ou <span style={{ color: "#FF6600" }}> fale com um gerente </span>
        </p>

        <FramePaper variant="googlePlay" textButton={"Android"} />
        <FramePaper variant="iOS" textButton={"Apple"} />

        <FramePaper variant="whatsapp" textButton={"Fale com um Gerente"} />
        <FramePaper
          variant="openFinance"
          textButton={"Compartilhe seus dados"}
        />
      </Grid>
    </>
  );
};

export default FifthPage;
