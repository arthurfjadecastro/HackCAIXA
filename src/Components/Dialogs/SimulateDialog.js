import React, { useEffect, useReducer, useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import { Questionnaire } from "../Questionnaire";
import axios from "axios";
import { useMatchesSmartphone } from "../Breakpoints";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Initial state to user info
const initialState = {
  cpf: "",
  phoneNumber: "",
  email: "",
  monetaryValue: "",
  installments: "",
  typeInstallments: "PRICE",
};

// Manage states of user information in a more organized and modular way
const reducer = (state, action) => {
  switch (action.type) {
    case "cpf":
      return { ...state, cpf: action.payload };
    case "phoneNumber":
      return { ...state, phoneNumber: action.payload };
    case "email":
      return { ...state, email: action.payload };  
    case "monetaryValue":
      return { ...state, monetaryValue: action.payload };
    case "installments":
      return { ...state, installments: action.payload };
    case "typeInstallments":
      return { ...state, typeInstallments: action.payload };
    case "resetState":
      return initialState;
    default:
      return state;
  }
};


function SimulateDialog({ isOpen, setClose }) {
  // State that stores the request data
  const [response, setResponse] = useState();
  
  // State created to store processed data 
  const [ETLData, setEtlData] = useState();

  // State that iterates the simulation result by type
  const iterableData = {};
  
  // Create reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create state page of Questionnaire
  const [page, setPage] = useState(1);

  // Action to reset Questionnaire
  const resetState = () => ({
    type: "resetState",
  });

  // Effect to Reset form
  useEffect(() => {
    setPage(1);
    dispatch(resetState());
  }, [isOpen === false]);

  // Effect that iterates over request response
  useEffect(() => {
    if (response !== null && response !== undefined)
      response.resultadoSimulacao.forEach((item) => {
        iterableData[item.tipo] = item.parcelas;
      });
    setEtlData(iterableData);
  }, [response]);

  useEffect(() => {
    setResponse(undefined)
  }, [page === 4]);

 

  const isMobile = useMatchesSmartphone();

  // Method that makes the request when we switch from the third to the fourth page
  const handlePageChange = () => {
    if (page === 3) {
      const numericValue = parseInt(
        state.monetaryValue.replace(/[^0-9.-]+/g, "").replace(".", ""),
        10
      );
      axios
        .post("https://apphackaixades.azurewebsites.net/api/Simulacao", {
          valorDesejado: numericValue,
          prazo: state.installments,
        })
        .then((response) => setResponse(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }

    setPage(page + 1);
  };

  // Back page of Questionnaire
  const handleBack = () => {
    setPage(page - 1);
  };

  console.log(response)
  // console.log(state)

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={() => setClose(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#005CA9" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setClose(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              SimuladorCred CAIXA
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          style={{
            display: "flex",
            height: "100%",
            padding: isMobile ? 16 : 45,
            justifyContent: "center",
            flexWrap: isMobile? "wrap" : "noWrap"
          }}
        >
          <Questionnaire
            setClose={setClose}
            ETLData={ETLData}
            state={state}
            handleBack={handleBack}
            handlePageChange={handlePageChange}
            page={page}
            dispatch={dispatch}
            response={response}
          />
        </Box>
      </Dialog>
    </div>
  );
}

export default SimulateDialog;
