import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { BackButton, ButtonCEF, ButtonGroup, ButtonSimulateOther } from "../../Buttons";
import { Frame, FramePaper, LoanDetails } from "../../Frames";
import TooltipInfo from "../../Frames/TooltipInfo";
import Item from "../../Frames/Item";




const FourthPage = ({handleBack, ETLData}) => {
  const keyType = Object.keys(ETLData)[0];
  const [activeButton, setActiveButton] = useState(keyType);
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
    setActiveButton(keyType);
  }, [keyType && ETLData.PRICE.length > 0]);

  const handleType = () => {
    if(activeButton === "PRICE") {
      setActiveButton(Object.keys(ETLData)[1])
    }else{
      setActiveButton(Object.keys(ETLData)[0])
    }
  }

  


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
            Agora escolha a modalidade que cabe em seu bolso
          </TitleText>
        </Grid>
        <Grid item style={{flex: 2,width: "100%"}}>
          <Item>
          <TooltipInfo/>
          <ButtonGroup activeButton={activeButton} handleType={handleType}/> 
          <LoanDetails interesetAmount={ETLData.PRICE ? ETLData.PRICE[0].valorJuros : null} installmentAmount={ETLData.PRICE ? ETLData.PRICE[0].valorPrestacao : null} numberInstallment={ETLData.PRICE ? ETLData.PRICE[0].numero : null}/>
          <LoanDetails interesetAmount={lastInstallment.valorJuros} installmentAmount={lastInstallment.valorPrestacao} numberInstallment={lastInstallment.numero}/>
          {/* <LoanDetails/> */}
          </Item>
        </Grid>
        <Grid item>
        <Item>
          <ButtonCEF/>
        </Item>
        <Item>
        <BackButton handleClick={handleBack} textButton={"Voltar"} />
        </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default FourthPage;





