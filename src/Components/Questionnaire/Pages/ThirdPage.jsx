import React, { useState } from "react";
import { Grid,styled } from "@mui/material";
import { TableContainerInfo, TitleText } from "./Resources";
import { BackButton, ButtonCEF, ButtonGroup, Carousel } from "../../Buttons";
import Item from "../../Frames/Item";
import { isPositiveNumber } from "../../Buttons/Validations";
import TooltipInfo from "../../Frames/TooltipInfo";
import { RenderIf } from "../../Utils";
import FullScreenLoading from "./Resources/FullScreenLoading";

const ThirdPage = ({ state, dispatch, handlePageChange, handleBack, ETLData, response }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const isContinueButtonEnabled = isPositiveNumber(state.installments);
  const [activeButton, setActiveButton] = useState("PRICE");
  
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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    dispatch({ type: "installments", payload: option }); 
  };
  return (
    <>
      <RenderIf predicate={(ETLData && ETLData.PRICE) === undefined || (ETLData && ETLData.PRICE) === null}>
        <FullScreenLoading />
      </RenderIf>
      <RenderIf predicate={ETLData && ETLData.PRICE}>
      <Grid
        style={{ maxWidth: 600 }}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <TitleText>Escolha sua <span style={{ color: "#FF6600" }}>modalidade</span>  e <span style={{ color: "#FF6600" }}>parcelas</span> ideais.</TitleText>
        </Grid>
        <Grid
          item
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <TooltipInfo titleInfo={titleInfo} />
        </Grid>
        <Grid item style={{ flex: 2, width: "100%" }}>
          <Item>
          <Grid item style={{ marginBottom: 0}}>
            <ButtonGroup activeButton={activeButton} handleType={handleType} />
            <TableContainerInfo  activeButton={activeButton}/>
          </Grid>
          </Item>
        </Grid>
            <Carousel
              activeButton={activeButton}
              ETLData={ETLData}
              state={state}
              dispatch={dispatch}
              selectedOption={selectedOption}
              handleOptionClick={handleOptionClick}
            />
        <Grid item>
          <Item>
            <ButtonCEF
              buttonTitle={"Continuar"}
              isContinueButtonEnabled={isContinueButtonEnabled}
              handlePageChange={handlePageChange}
            />
          </Item>
          <Item>
            <BackButton handleClick={handleBack} textButton={"Voltar"} />
          </Item>
        </Grid>
      </Grid>
      </RenderIf>
    </>
  );
};

export default ThirdPage;
