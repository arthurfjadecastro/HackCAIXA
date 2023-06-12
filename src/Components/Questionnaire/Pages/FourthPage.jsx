import React, { useEffect, useState } from "react";
import { Grid, styled } from "@mui/material";

import { TitleText } from "./Resources";
import { LoanDetails } from "../../Frames";
import TooltipInfo from "../../Frames/TooltipInfo";
import Item from "../../Frames/Item";
import { RenderIf } from "../../Utils";
import FullScreenLoading from "./Resources/FullScreenLoading";
import { ProgressStepper } from "../../Dialogs/Resources";

const GrayText = styled("span")({
  color: "#808080",
  fontSize: "2px",
});

const FourthPage = ({
  activeStep,
  handleBack,
  ETLData,
  handlePageChange,
  activeButton,
  state,
  selectedOption,
  showAllInstallments,
}) => {
  const renderInstallments = () => {
    if (showAllInstallments) {
      const parcelas = ETLData && ETLData[activeButton] && ETLData[activeButton][`parcelas${selectedOption}`];
      console.log("etl data data")
      console.log(ETLData)
      // Renderizar múltiplos de 4 até selectedOption
      const installmentsToRender = parcelas
        .filter(
          (installment) =>
            installment.numero === 1 ||
            installment.numero === selectedOption ||
            (installment.numero % 4 === 0 &&
              installment.numero <= selectedOption)
        )
        .map((installment, index) => (
          <>
            <Grid item>
              <LoanDetails
                key={index}
                activeButton={activeButton}
                amortization={installment.valorAmortizacao}
                interesetAmount={installment.valorJuros}
                installmentAmount={installment.valorPrestacao}
                numberInstallment={installment.numero}
              />
            </Grid>
          </>
        ));

      return installmentsToRender;    
    } else {
      const parcelasKey = `parcelas${selectedOption}`;
      const firstInstallment = ETLData[activeButton]?.[parcelasKey]?.[0];
      const lastInstallment =
        ETLData[activeButton]?.[parcelasKey]?.[selectedOption - 1] || {};
  
      return (
        <>
          {firstInstallment && (
            <Grid item>
              <LoanDetails
                amortization={firstInstallment.valorAmortizacao}
                activeButton={activeButton}
                interesetAmount={firstInstallment.valorJuros}
                installmentAmount={firstInstallment.valorPrestacao}
                numberInstallment={firstInstallment.numero}
              />
            </Grid>
          )}
          {lastInstallment && (
            <Grid item>
              <LoanDetails
                amortization={lastInstallment.valorAmortizacao}
                activeButton={activeButton}
                interesetAmount={lastInstallment.valorJuros}
                installmentAmount={lastInstallment.valorPrestacao}
                numberInstallment={selectedOption}
              />
            </Grid>
          )}
        </>
      );
    }
  };
  
  

  return (
    <>
      <ProgressStepper activeStep={activeStep} />
      <Grid
        item
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TitleText>Detalhes da  <span style={{ color: "#FF6600" }}>solicitação</span></TitleText>
      </Grid>
      <Grid
        item
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <TooltipInfo titleInfo={"Resumo da primeira e última parcela"} />
      </Grid>

      <Grid
        item
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "100%",
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <RenderIf predicate={ETLData !== undefined && ETLData !== null}>
          <RenderIf predicate={ETLData && ETLData[activeButton]}>
            <Grid
              justifyContent={"center"}
              container
              alignItems="center"
              spacing={2}
              flexDirection="column"
            >
              {renderInstallments()}
            </Grid>
          </RenderIf>
        </RenderIf>
      </Grid>
    </>
  );
};

export default FourthPage;
