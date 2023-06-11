import React from "react";
import { Grid } from "@mui/material";
import { TitleText } from "./Resources";
import { CellPhoneNumber, Cpf } from "../../Inputs";
import { ButtonCEF } from "../../Buttons";
import Item from "../../Frames/Item";
import {
  isCPFValid,
  isEmail,
  isNonEmptyString,
  isPhoneNumber,
} from "../../Inputs/Validations/Base";
import Email from "../../Inputs/Email";

function FirstPage({ state, dispatch, handlePageChange }) {
  const isContinueButtonEnabled =
    (isCPFValid(state.cpf) && isPhoneNumber(state.phoneNumber)) && isEmail(state.email) ||
    isNonEmptyString(state);
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <TitleText>Informe seu <br></br> <span style={{ color: "#FF6600" }}> E-mail, CPF</span> e <span style={{ color: "#FF6600" }}>Telefone</span>  </TitleText>
        </Grid>
        <Grid item style={{ flex: 2, width: "100%" }}>
        <Item>
            <Email
              value={state.email}
              onChange={(event) =>
                dispatch({ type: "email", payload: event.target.value })
              }
            />
          </Item>
          <Item>
            <Cpf
              value={state.cpf}
              onChange={(event) =>
                dispatch({ type: "cpf", payload: event.target.value })
              }
            />
          </Item>
          <Item>
            <CellPhoneNumber
              value={state.phoneNumber}
              onChange={(event) =>
                dispatch({ type: "phoneNumber", payload: event.target.value })
              }
            />
          </Item>
        </Grid>

        <Grid item>
          <Item>
            <ButtonCEF
              buttonTitle={"Continuar"}
              isContinueButtonEnabled={isContinueButtonEnabled}
              handlePageChange={handlePageChange}
            />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default FirstPage;
