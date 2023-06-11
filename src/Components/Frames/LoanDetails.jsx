import React from "react";
import { Paper, Grid, Typography, styled, Divider } from "@mui/material";
import PlusOneOutlinedIcon from '@mui/icons-material/PlusOneOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const Frame = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

const IconWrapper = styled("div")({
  position: "relative",
  marginRight: "10px",
  display: "flex",
  alignItems: "center",
});

const TextWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

const CustomComponent = ({
  numberInstallment,
  installmentAmount,
  interesetAmount,
}) => {
  return (
    <Frame>
      <Grid container spacing={2} alignItems="center">
        <Grid style={{    display: "flex", alignItems: "center", justifyContent: "center"}} item  xs={6}>
          <IconWrapper>
            {numberInstallment === 1 ? (
              <PlusOneOutlinedIcon
                style={{
                  width: 24,
                  height: 24,
                  color: "#005CA9",
                  fontWeight: "bold",
                  fontSize: "24px",
                  borderRadius: "50%",
                  border: "2px solid #005CA9",
                }}
              />
            ) : (
              <CheckOutlinedIcon
                style={{
                  width: 24,
                  height: 24,
                  color: "#005CA9",
                  fontWeight: "bold",
                  fontSize: "24px",
                  borderRadius: "50%",
                  border: "2px solid #005CA9",
                }}
              />
            )}
          </IconWrapper>
          <TextWrapper>
            <Typography variant="body1" align="center" style={{ fontWeight: "bold" }}>
              {numberInstallment}ª prestação
            </Typography>
          </TextWrapper>
        </Grid>
        <Grid item xs={1}>
          <Divider
            orientation="vertical"
            style={{ height: 50, width: "2px", backgroundColor: "#005CA9" }}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography
            variant="body1"
            align="center"
            style={{ color: "#FF6600", fontSize: "28px", textWrap: "nowrap" }}
          >
            R$ {installmentAmount}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            {interesetAmount}% ao mês
          </Typography>
        </Grid>
      </Grid>
    </Frame>
  );
};

export default CustomComponent;
