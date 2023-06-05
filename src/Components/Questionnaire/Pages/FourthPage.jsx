import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper,styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF, ButtonGroup, ButtonSimulateOther } from "../../Buttons";
import { Frame, FramePaper } from "../../Frames";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const FourthPage = ({}) => {
  
  const [value, setValue] = useState();

  useEffect(() => {
    axios.post("https://apphackaixades.azurewebsites.net/api/Simulacao",{
      valorDesejado: 900,
      prazo: 5
 })
      .then((response) => setValue(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  console.log(value)

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
            Agora escolha a modalidade que cabe em seu bolso
          </TitleText>
        </Grid>
        <Grid item style={{flex: 2,width: "100%"}}>
          <Item>
          <ButtonGroup/> 
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





