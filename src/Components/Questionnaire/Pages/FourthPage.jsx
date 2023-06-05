import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF, ButtonGroup, ButtonSimulateOther } from "../../Buttons";
import { Frame, FramePaper, LoanDetails } from "../../Frames";
import TooltipInfo from "../../Frames/TooltipInfo";
import Item from "../../Frames/Item";




const FourthPage = ({}) => {
  
  const [value, setValue] = useState();

//   useEffect(() => {
//     axios.post("https://apphackaixades.azurewebsites.net/api/Simulacao",{
//       valorDesejado: 900,
//       prazo: 5
//  })
//       .then((response) => setValue(response.data))
//       .catch((err) => {
//         console.error("ops! ocorreu um erro" + err);
//       });
//   }, []);

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
          <ButtonGroup/> 
          <LoanDetails/>
          <LoanDetails/>
          </Item>
        </Grid>
        <Grid item>
        <Item>
          <ButtonCEF/>
          <ButtonSimulateOther/>
        </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default FourthPage;





