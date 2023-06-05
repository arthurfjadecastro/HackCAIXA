import React from "react";
import { Paper, Grid, Typography, styled } from "@mui/material";

const Frame = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffffff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(2),
}));

const CustomComponent = ({numberInstallment, installmentAmount, interesetAmount}) => {
  return (
    <Frame>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" align="center">
            1
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="body1">{numberInstallment}ª prestação</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">R$ {installmentAmount}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{interesetAmount}% ao mês</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Frame>
  );
};

export default CustomComponent;