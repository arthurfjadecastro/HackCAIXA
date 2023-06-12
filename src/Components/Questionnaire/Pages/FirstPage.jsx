import React from "react";
import { Grid } from "@mui/material";
import { TitleText } from "./Resources";
import { CellPhoneNumber, Cpf } from "../../Inputs";
import { ButtonCEF } from "../../Buttons";
import Item from "../../Frames/Item";
import Email from "../../Inputs/Email";
import { ProgressStepper } from "../../Dialogs/Resources";

function FirstPage({ state, dispatch,activeStep }) {
 
  return (
    <>
     <ProgressStepper activeStep={activeStep}/>
      <Grid item>
        {/* <Grid item  style={{ display: "flex", justifyContent: "center",width: "100%", flexDirection: "column"}}> */}
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
    </>
  );
}

export default FirstPage;
