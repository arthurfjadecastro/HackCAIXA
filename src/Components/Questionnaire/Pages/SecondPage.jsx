import React, { useEffect, useState } from "react";
import { Monetary } from "../../Inputs";
import { Grid } from "@mui/material";
import { TitleText } from "./Resources";
import { BackButton, ButtonCEF } from "../../Buttons";
import Item from "../../Frames/Item";
import { isNonEmptyString } from "../../Inputs/Validations/Base";
import SliderMonetary from "../../Inputs/SliderMonetary";
import { ProgressStepper } from "../../Dialogs/Resources";

const ThirdPage = ({ state, dispatch, handlePageChange, handleBack, activeStep}) => {


  // const isContinueButtonEnabled =
  //   !isValid && isNonEmptyString(state.monetaryValue);
  return (
    <>
       <ProgressStepper activeStep={activeStep}/>
        <Grid item>
       
          <TitleText>Informe a <span style={{ color: "#FF6600" }}>quantia desejada</span></TitleText>
        </Grid>
        <Grid item style={{ flex: 2, width: "100%" }}>
          <Item>
            <Monetary
              value={state.monetaryValue}
              onChange={(event) =>
                dispatch({ type: "monetaryValue", payload: event.target.value })
              }
            />
          </Item>
          <Item>
            <SliderMonetary
              value={state.monetaryValue}
              onChange={(event) =>
                dispatch({ type: "monetaryValue", payload: event.target.value })
              }
            />
          </Item>
        </Grid>
        {/* <Grid item>
          <Item>
            <ButtonCEF
              buttonTitle={"Simular"}
              isContinueButtonEnabled={isContinueButtonEnabled}
              handlePageChange={handlePageChange}
            />
          </Item>
          <Item>
            <BackButton handleClick={handleBack} textButton={"Voltar"} />
          </Item>
        </Grid> */}
    </>
  );
};

export default ThirdPage;
