import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "./buttonGroup.css"; // Importe seu arquivo de estilos CSS

export default function DisableElevation({ activeButton, handleType }) {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button
        className={activeButton === "PRICE" ? "active2" : "disable"}
        onClick={handleType}
      >
        PRICE
      </Button>
      <Button
        className={activeButton === "SAC" ? "active2" : "disable"}
        onClick={handleType}
      >
        SAC
      </Button>
    </ButtonGroup>
  );
}
