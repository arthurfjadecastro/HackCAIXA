import React, { useEffect, useState } from "react";
import { Grid, styled } from "@mui/material";

import { TitleText } from "./Resources";
import {
  BackButton,
  ButtonCEF,
  ButtonGroup,
} from "../../Buttons";
import { LoanDetails } from "../../Frames";
import TooltipInfo from "../../Frames/TooltipInfo";
import Item from "../../Frames/Item";
import { RenderIf } from "../../Utils";
import FullScreenLoading from "./Resources/FullScreenLoading";

const TableContainer = styled(Grid)({
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
});

const Table = styled("table")({
  width: "100%",
  borderCollapse: "collapse",
});

const Th = styled("th")({
  padding: "12px",
  textAlign: "left",
  backgroundColor: "#ff6600", // Laranja
  color: "#fff", // Branco
});

const EvenRow = styled("tr")({
  backgroundColor: "#f5f5f5", // Azul
});

const Td = styled("td")({
  padding: "12px",
});

const FourthPage = ({ handleBack, ETLData, handlePageChange, dispatch, response }) => {
  const [activeButton, setActiveButton] = useState("PRICE");



  const TableContainer = styled(Grid)({
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    fontSize:12,
    marginTop: 16
  });
  
  const Table = styled("table")({
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #ccc",
    borderRadius: "8px",
  });
  
  const Th = styled("th")({
    padding: "12px",
    textAlign: "left",
    backgroundColor: "#ff6600",
    color: "#fff",
  });
  
  const EvenRow = styled("tr")({
    backgroundColor: "#f5f5f5",
  });
  
  const Td = styled("td")({
    padding: "12px",
    border: "1px solid #ccc",
    color: "#333", // Cor do texto nas células
  });

  const HighlightedTd = styled(Td)({
    backgroundColor: "#fff", // Cor de fundo destacada
    fontWeight: "bold",
  });

  const handleType = () => {
    if (activeButton === "PRICE") {
      setActiveButton(Object.keys(ETLData)[1]);
      dispatch({ type: "typeInstallments", payload: "SAC" }); // Exemplo de ação para atualizar o estado das parcelas
    } else {
      setActiveButton(Object.keys(ETLData)[0]);
      dispatch({ type: "typeInstallments", payload: "PRICE" }); // Exemplo de ação para atualizar o estado das parcelas
    }
  };

  const titleInfo =
    activeButton === "PRICE"
      ? "Ideal para quem busca parcelas fixas e planejamento financeiro."
      : "Ideal para quem busca previsibilidade nas parcelas.";
  console.log(activeButton);

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item style={{ display: "flex", justifyContent: "center" }}>
          <TitleText>
            Agora escolha a modalidade que cabe em seu bolso
          </TitleText>
        </Grid>
        <Grid
          item
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <TooltipInfo titleInfo={titleInfo} />
        </Grid>
        <Grid item style={{ marginBottom: 40 }}>
          <ButtonGroup activeButton={activeButton} handleType={handleType} />
        </Grid>
        <Grid item style={{ flex: 1, width: "100%", maxWidth: "400px" }}>
        <RenderIf predicate={(ETLData && ETLData.PRICE) === undefined || (ETLData && ETLData.PRICE) === null}>
          <FullScreenLoading />
        </RenderIf>
        <RenderIf predicate={ETLData !== undefined && ETLData !== null}>
        <RenderIf predicate={activeButton === "PRICE"}>
            <RenderIf predicate={ETLData && ETLData.PRICE}>
              <Grid container flexDirection={"column"}>
                <Grid
                  Item
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "16px",
                  }}
                >
                  <LoanDetails
                    interesetAmount={
                      ETLData && ETLData.PRICE
                        ? ETLData.PRICE[0]?.valorJuros
                        : null
                    }
                    installmentAmount={
                      ETLData && ETLData.PRICE
                        ? ETLData.PRICE[0]?.valorPrestacao
                        : null
                    }
                    numberInstallment={
                      ETLData && ETLData.PRICE ? ETLData.PRICE[0]?.numero : null
                    }
                  />
                </Grid>
                <Grid Item style={{ width: "100%", height: "100%" }}>
                  <LoanDetails
                    interesetAmount={
                      ETLData && ETLData.PRICE
                        ? ETLData.PRICE[ETLData.PRICE.length - 1].valorJuros
                        : null
                    }
                    installmentAmount={
                      ETLData && ETLData.PRICE
                        ? ETLData.PRICE[ETLData.PRICE.length - 1].valorPrestacao
                        : null
                    }
                    numberInstallment={
                      ETLData && ETLData.PRICE
                        ? ETLData.PRICE[ETLData.PRICE.length - 1].numero
                        : null
                    }
                  />
                </Grid>
              </Grid>
            </RenderIf>
          </RenderIf>
          <RenderIf predicate={activeButton === "SAC"}>
            <RenderIf predicate={ETLData && ETLData.SAC}>
              <Grid container flexDirection={"column"}>
                <Grid
                  Item
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "16px",
                  }}
                >
                  <LoanDetails
                    interesetAmount={
                      ETLData && ETLData.SAC ? ETLData.SAC[0]?.valorJuros : null
                    }
                    installmentAmount={
                      ETLData && ETLData.SAC
                        ? ETLData.SAC[0]?.valorPrestacao
                        : null
                    }
                    numberInstallment={
                      ETLData && ETLData.SAC ? ETLData.SAC[0]?.numero : null
                    }
                  />
                </Grid>
                <Grid
                  Item
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "16px",
                  }}
                >
                  <LoanDetails
                    interesetAmount={
                      ETLData && ETLData.SAC
                        ? ETLData.SAC[ETLData.SAC.length - 1].valorJuros
                        : null
                    }
                    installmentAmount={
                      ETLData && ETLData.SAC
                        ? ETLData.SAC[ETLData.SAC.length - 1].valorPrestacao
                        : null
                    }
                    numberInstallment={
                      ETLData && ETLData.SAC
                        ? ETLData.SAC[ETLData.SAC.length - 1].numero
                        : null
                    }
                  />
                </Grid>
              </Grid>
            </RenderIf>
          </RenderIf>
        </RenderIf>
        <TableContainer container justifyContent="center">
      <Table>
        <tbody>
          <tr>
            <Th>Modelo</Th>
            <Td>SAC</Td>
            <Td>PRICE</Td>
          </tr>
          <EvenRow>
            <Th>Amortização</Th>
            <Td>Amortização constante</Td>
            <Td>Amortização gradual</Td>
          </EvenRow>
          <tr>
            <Th>Parcelas</Th>
            <Td>Parcelas iniciais mais altas e redução progressiva</Td>
            <Td>Parcelas constantes ao longo do tempo</Td>
          </tr>
          <tr>
            <Th>Benefícios</Th>
            <HighlightedTd>Menor custo total de financiamento</HighlightedTd>
            <HighlightedTd>Maior previsibilidade das parcelas</HighlightedTd>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
        </Grid>

        <Grid item>
          <Item>
            <ButtonCEF
              buttonTitle={"Continuar"}
              handlePageChange={handlePageChange}
              isContinueButtonEnabled={true}
            />
          </Item>
          <Item>
            <BackButton handleClick={handleBack} textButton={"Voltar"} />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default FourthPage;
