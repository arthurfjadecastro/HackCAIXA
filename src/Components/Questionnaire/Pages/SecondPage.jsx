import React, { useEffect, useState } from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { BackButton, ButtonCEF, ButtonSimulateOther } from "../../Buttons";
import Item from "../../Frames/Item";
import { isPositiveNumber } from "../../Buttons/Validations";
import { isNonEmptyString } from "../../Inputs/Validations/Base";




const ThirdPage = ({state, dispatch, handlePageChange, handleBack}) => {
  const [isValid, setIsValid] = useState("")
  const numericValue = parseInt(state.monetaryValue.replace(/[^0-9.-]+/g, "").replace(".", ""), 10); // Remova o ponto antes de converter o valor


useEffect(() => {

  if (numericValue < 200 || numericValue > 10000) {
    setIsValid(true)
  } else {
    setIsValid(false);
  }
}, [numericValue])


  
  
  const isContinueButtonEnabled = !isValid && isNonEmptyString(state.monetaryValue);
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
            De quanto você precisa?
          </TitleText>
        </Grid>
        <Grid item style={{flex: 2,width: "100%"}}>
          <Item>
          <Monetary
            value={state.monetaryValue}
            onChange={(event) => dispatch({ type: "monetaryValue", payload: event.target.value })}
          />
          </Item>
        </Grid>
        <Grid item>
        <Item>
        <ButtonCEF isContinueButtonEnabled={isContinueButtonEnabled} handlePageChange={handlePageChange} />
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

