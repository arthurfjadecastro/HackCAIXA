import React, { useEffect, useState } from "react";
import { Grid, styled } from "@mui/material";

import { TitleText } from "./Resources";
import { LoanDetails } from "../../Frames";
import TooltipInfo from "../../Frames/TooltipInfo";
import Item from "../../Frames/Item";
import { RenderIf } from "../../Utils";
import FullScreenLoading from "./Resources/FullScreenLoading";
import { ProgressStepper } from "../../Dialogs/Resources";

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
    console.log(activeButton);
    console.log(selectedOption);
    if (showAllInstallments) {
      // Renderizar múltiplos de 4 até selectedOption
      const installmentsToRender = ETLData[activeButton]
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
                interesetAmount={installment.valorJuros}
                installmentAmount={installment.valorPrestacao}
                numberInstallment={installment.numero}
              />
            </Grid>
          </>
        ));

      return installmentsToRender;
    } else {
      // Renderizar apenas a primeira e a última prestação
      const firstInstallment = ETLData[activeButton][0];
      const lastInstallment = ETLData[activeButton][selectedOption - 1];

      return (
        <>
          <Grid item>
            <LoanDetails
              activeButton={activeButton}
              interesetAmount={firstInstallment.valorJuros}
              installmentAmount={firstInstallment.valorPrestacao}
              numberInstallment={firstInstallment.numero}
            />
          </Grid>
          <Grid item>
            <LoanDetails
              activeButton={activeButton}
              interesetAmount={lastInstallment.valorJuros}
              installmentAmount={lastInstallment.valorPrestacao}
              numberInstallment={selectedOption}
            />
          </Grid>
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
        <TitleText>Detalhes da solicitação</TitleText>
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
