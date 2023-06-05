import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { BackButton, ButtonCEF, ButtonGroup, ButtonSimulateOther } from "../../Buttons";
import { Frame, FramePaper, LoanDetails } from "../../Frames";
import TooltipInfo from "../../Frames/TooltipInfo";
import Item from "../../Frames/Item";
import { RenderIf } from "../../Utils";




const FourthPage = ({handleBack, ETLData,handlePageChange, dispatch}) => {
  const [activeButton, setActiveButton] = useState("PRICE");
  const handleType = () => {
    if(activeButton === "PRICE") {
      setActiveButton(Object.keys(ETLData)[1])
      dispatch({ type: 'typeInstallments', payload: "SAC" }); // Exemplo de ação para atualizar o estado das parcelas

    }else{
      setActiveButton(Object.keys(ETLData)[0])
      dispatch({ type: 'typeInstallments', payload: "PRICE" }); // Exemplo de ação para atualizar o estado das parcelas

    }
  }

  console.log(activeButton)


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
          <RenderIf predicate={activeButton === "PRICE"}>
            <LoanDetails
                interesetAmount={ETLData && ETLData.PRICE ? ETLData.PRICE[0]?.valorJuros : null}
                installmentAmount={ETLData && ETLData.PRICE ? ETLData.PRICE[0]?.valorPrestacao : null}
                numberInstallment={ETLData && ETLData.PRICE ? ETLData.PRICE[0]?.numero : null}
            />
            <LoanDetails interesetAmount={ETLData && ETLData.PRICE ? ETLData.PRICE[ETLData.PRICE.length - 1].valorJuros: null} installmentAmount={          ETLData && ETLData.PRICE ? ETLData.PRICE[ETLData.PRICE.length - 1].valorPrestacao : null} numberInstallment={ETLData && ETLData.PRICE ? ETLData.PRICE[ETLData.PRICE.length - 1].numero : null}/>
          </RenderIf> 
          <RenderIf predicate={activeButton === "SAC"}>
            <LoanDetails
                interesetAmount={ETLData && ETLData.SAC ? ETLData.SAC[0]?.valorJuros : null}
                installmentAmount={ETLData && ETLData.SAC ? ETLData.SAC[0]?.valorPrestacao : null}
                numberInstallment={ETLData && ETLData.SAC ? ETLData.SAC[0]?.numero : null}
            />
            <LoanDetails interesetAmount={ETLData && ETLData.SAC ? ETLData.SAC[ETLData.SAC.length - 1].valorJuros: null} installmentAmount={          ETLData && ETLData.SAC ? ETLData.SAC[ETLData.SAC.length - 1].valorPrestacao : null} numberInstallment={ETLData && ETLData.SAC ? ETLData.SAC[ETLData.SAC.length - 1].numero : null}/>
          </RenderIf> 
          </Item>
        </Grid>
        <Grid item>
        <Item>
        <ButtonCEF  buttonTitle={"Continuar"} handlePageChange={handlePageChange} isContinueButtonEnabled={true} />
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





