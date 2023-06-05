import React from "react";
import { Typography, Tooltip, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const TextWithInfo = ({ text, tooltipText }) => {
  return (
    <Tooltip title={tooltipText}>
      <IconButton aria-label="info">
        <Typography>{text}</Typography>
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
};

const TooltipInfo = () => {
  return (
    <>
      <TextWithInfo
        text="Texto com informações"
        tooltipText="Informações pertinentes"
      />
      {/* Resto do seu código */}
    </>
  );
};

export default TooltipInfo;
