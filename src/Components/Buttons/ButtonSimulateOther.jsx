import React from "react";
import { Button, styled } from "@mui/material";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
    width: 312,
    height: 48,
    background: "white",
    boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: 20,
    color: "black",
    borderColor: "black",
    border: 1,
    // backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));


const ButtonCEF = ({}) => {
  
  return (
    <React.Fragment>
        <ColorButton>
            Simular outro valor
        </ColorButton>    
    </React.Fragment>
  );
};

export default ButtonCEF;