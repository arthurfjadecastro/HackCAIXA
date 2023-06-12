import React, { useEffect, useState } from "react";
import { Monetary } from "../../Inputs";
import { Grid } from "@mui/material";
import { TitleText } from "./Resources";
import { BackButton, ButtonCEF } from "../../Buttons";
import Item from "../../Frames/Item";
import { isNonEmptyString } from "../../Inputs/Validations/Base";
import SliderMonetary from "../../Inputs/SliderMonetary";

const ThirdPage = ({ state, dispatch, handlePageChange, handleBack }) => {
  const [isValid, setIsValid] = useState("");
  const numericValue = parseInt(
    state.monetaryValue.replace(/[^0-9.-]+/g, "").replace(".", ""),
    10
  ); 

  useEffect(() => {
    if (numericValue < 200 || numericValue > 10000) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [numericValue]);

  const isContinueButtonEnabled =
    !isValid && isNonEmptyString(state.monetaryValue);
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
      </Grid>
    </>
  );
};

export default ThirdPage;
