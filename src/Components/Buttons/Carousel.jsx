import React from "react";
import { ButtonGroup, Button, Grid, Typography } from "@mui/material";
import "./carousel.css";

const Carousel = ({ state, dispatch, handleOptionClick, selectedOption, ETLData, activeButton }) => {
  const renderOptions = () => {
    const options = [6, 12, 24];

    console.log("ae");
    console.log(ETLData && ETLData);

    return options.map((option) => (
      <Grid key={option} style={{    maxWidth: 370}} item>
        <Button
          variant={state.installments === option ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleOptionClick(option)}
          style={{
            borderRadius: "16px",
            fontWeight: "bold",
            width: "100%",
            height: "100px",
            padding: "16px",
            marginBottom: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: state.installments === option ? "#005CA9" : "transparent",
          }}
        >
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "20px" }}
          >
            <span style={{ color: "#FF6600" }}>{state.monetaryValue}</span> em {option}x
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" style={{ fontSize: "12px", }}>
              Valor da 1ª prestação: <span style={{ color: "#FF6600", fontWeight: "bold" }}>R$ {ETLData && ETLData[activeButton]
                ? ETLData[activeButton][0].valorPrestacao
                : null}</span>
            </Typography>
            <Typography variant="body2" style={{ fontSize: "12px" }}>
              Valor da última prestação: <span style={{ color: "#FF6600", fontWeight: "bold" }}>R$ {ETLData && ETLData[activeButton]
                ? ETLData[activeButton][ETLData[activeButton].length - 1].valorPrestacao
                : null}</span>
            </Typography>
          </div>
        </Button>
      </Grid>
    ));
  };

  return (
    <div className="carousel">
      <h2 style={{ fontSize: 18, textAlign: "center" }}>Selecione a quantidade de parcelas:</h2>
      <Grid container spacing={2} justifyContent="center">
        {renderOptions()}
      </Grid>
      {/* <p style={{ textAlign: "center" }}>
        Opção selecionada: {state.installments}x
      </p> */}
    </div>
  );
};

export default Carousel;
