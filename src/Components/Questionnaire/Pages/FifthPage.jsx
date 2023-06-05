import React, { useEffect, useState } from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF } from "../../Buttons";
import { Frame, FramePaper } from "../../Frames";
import Item from "../../Frames/Item";

const FifthPage = ({setClose,ETLData, state}) => {
  const [lastInstallment, setLastInstallment] = useState({numero: "", valorJuros: "", valorPrestacao: ""});

  
  useEffect(() => {
    if (Array.isArray(ETLData.PRICE) && ETLData.PRICE.length > 0) {
      const ultimoElemento = ETLData.PRICE[ETLData.PRICE.length - 1];
      const numero = ultimoElemento.numero;
      const valorJuros = ultimoElemento.valorJuros
      const valorPrestacao = ultimoElemento.valorPrestacao
      setLastInstallment({numero, valorJuros, valorPrestacao})
      // Faça o que precisa com o número
    } else {
      // Trate o caso em que o array ETLData.PRICE está vazio ou indefinido
    }
  
  }, [ETLData.PRICE.length > 0]);

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
          <Frame installments={state.installments} lastInstallment={lastInstallment.valorPrestacao} valueFirstInitialInstallment={ETLData.PRICE ? ETLData.PRICE[0].valorPrestacao : null} initialInstallment={ETLData.PRICE ? ETLData.PRICE[0].numero : null} value={state.monetaryValue}/>
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
        <ButtonCEF buttonTitle={"Concluir"} isContinueButtonEnabled={true} handlePageChange={() => setClose(false)} />
        </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default FifthPage;




