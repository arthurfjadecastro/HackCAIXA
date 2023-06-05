import React, { useState } from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { BackButton, ButtonCEF, Carousel } from "../../Buttons";
import Item from "../../Frames/Item";
import { isPositiveNumber } from "../../Buttons/Validations";



const ThirdPage = ({state, dispatch, handlePageChange, handleBack}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const isContinueButtonEnabled =  isPositiveNumber(state.installments);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    dispatch({ type: 'installments', payload: option }); // Exemplo de ação para atualizar o estado das parcelas
  };
  return (
    <>
    <Grid
        style={{maxWidth: 600}}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <TitleText>
            Em quantas vezes gostaria de pagar?
          </TitleText>
        </Grid>
        <Grid item style={{flex: 2,width: "100%"}}>
          <Item>
          <Carousel state={state} dispatch={dispatch} selectedOption={selectedOption}  handleOptionClick={handleOptionClick}/>
          </Item>
        </Grid>
        <Grid item>
        <Item>
        <ButtonCEF  buttonTitle={"Continuar"} isContinueButtonEnabled={isContinueButtonEnabled} handlePageChange={handlePageChange} />
        </Item>
        <Item>
        <BackButton handleClick={handleBack} textButton={"Voltar"} />
        </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default ThirdPage;