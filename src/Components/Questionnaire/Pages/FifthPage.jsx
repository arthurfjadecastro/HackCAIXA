import React, { useEffect, useState } from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper, styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF } from "../../Buttons";
import { Frame, FramePaper } from "../../Frames";
import Item from "../../Frames/Item";
import { RenderIf } from "../../Utils";

const FifthPage = ({ setClose, ETLData, state, page }) => {
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
                ETLData && ETLData.PRICE
                  ? ETLData.PRICE[ETLData.PRICE.length - 1].valorPrestacao
                  : null
              }
              valueFirstInitialInstallment={
                ETLData.PRICE ? ETLData.PRICE[0].valorPrestacao : null
              }
              initialInstallment={
                ETLData && ETLData.PRICE ? ETLData.PRICE[0]?.numero : null
              }
              value={state.monetaryValue}
            />
          </RenderIf>
          <RenderIf predicate={state.typeInstallments === "SAC"}>
            <Frame
              installments={state.installments}
              lastInstallment={
                ETLData && ETLData.SAC
                  ? ETLData.SAC[ETLData.SAC.length - 1].valorPrestacao
                  : null
              }
              valueFirstInitialInstallment={
                ETLData.SAC ? ETLData.SAC[0].valorPrestacao : null
              }
              initialInstallment={
                ETLData && ETLData.PRICE ? ETLData.PRICE[0]?.numero : null
              }
              value={state.monetaryValue}
            />
          </RenderIf>
          <p
            style={{
              fontSize: "14px",
              textAlign: "center",
              marginTop: "49px",
            }}
          >
            Acesse o aplicativo e faça seu financiamento <br></br> ou fale com
            um gerente.
          </p>
          <FramePaper
            text={"Contrate no aplicativo CAIXA"}
            img={"/img/logocaixa.png"}
          />
          <FramePaper
            textButton={"Clique aqui"}
            text={"Fale com um gerente agora"}
            img={"/img/whatsappicon.png"}
          />
        </Grid>
        <Grid item>
          <Item>
            <ButtonCEF
              page={page}
              setClose={setClose}
              buttonTitle={"Concluir"}
              isContinueButtonEnabled={true}
              handlePageChange={setClose}
            />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default FifthPage;
