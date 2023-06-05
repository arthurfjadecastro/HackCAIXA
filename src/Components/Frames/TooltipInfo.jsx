import React from "react";
import { Typography, Tooltip, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import "./tooltipInfo.css"; // Importe o arquivo CSS


const TextWithInfo = ({ text, tooltipText }) => {
  return (
    <Tooltip title={tooltipText}>
      <IconButton disableFocusRipple disableTouchRipple  aria-label="info">
        <Typography>{text}</Typography>
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
};

const TooltipInfo = ({titleInfo}) => {
  return (
    <>
      <TextWithInfo
        text="Informações"
        tooltipText={titleInfo}
      />
      {/* Resto do seu código */}
    </>
  );
};

export default TooltipInfo;
