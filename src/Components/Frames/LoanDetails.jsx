import React from "react";
import { Paper, Grid, Typography, styled } from "@mui/material";

const Frame = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F5F5F5",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

const CustomComponent = ({
  numberInstallment,
  installmentAmount,
  interesetAmount,
}) => {
  return (
    <Frame>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h6" align="center">
            <span
              style={{
                justifyContent: "center",
                display: "inline-flex",
                width: 40,
                height: 40,
                color: "#FF6600",
                fontWeight: "bold",
                fontSize: "24px",
                backgroundColor: "#c3c3c5",
                borderRadius: "50%",
              }}
            >
              {numberInstallment}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="body1" align="center">
                <span style={{ fontWeight: "bold" }}>
                  {numberInstallment}ª prestação
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "#FF6600", fontSize: "32px" }}
              >
                R$ {installmentAmount}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "rgba(0, 0, 0, 0.6)" }}
              >
                {interesetAmount}% ao mês
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Frame>
  );
};

export default CustomComponent;
