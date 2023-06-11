import React, { useState } from "react";
import {
  FirstPage,
  SecondPage,
  ThirdPage,
  FourthPage,
  FifthPage,
} from "./Pages";
import { RenderIf } from "../Utils";

const Questionnaire = ({
  page,
  handlePageChange,
  handleBack,
  state,
  dispatch,
  ETLData,
  setClose,
  response
}) => {
  const [activeButton, setActiveButton] = useState("PRICE");

  const [selectedOption, setSelectedOption] = useState(null);
 
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    dispatch({ type: "installments", payload: option }); 
  };
  

  const handleType = () => {
    if (activeButton === "PRICE") {
      setActiveButton("SAC");
      dispatch({ type: "typeInstallments", payload: activeButton }); // Exemplo de ação para atualizar o estado das parcelas
    } else {
      setActiveButton("PRICE");
      dispatch({ type: "typeInstallments", payload: activeButton }); // Exemplo de ação para atualizar o estado das parcelas
    }
  };

  const titleInfo =
    activeButton === "PRICE"
      ? "Ideal para quem busca parcelas fixas e planejamento financeiro."
      : "Ideal para quem busca previsibilidade nas parcelas.";


  return (
    
    <>
      <RenderIf predicate={page === 1}>
        <FirstPage
          handlePageChange={handlePageChange}
          currentPage={page}
          state={state}
          dispatch={dispatch}
        />
      </RenderIf>
      <RenderIf predicate={page === 2}>
        <SecondPage
          handleBack={handleBack}
          handlePageChange={handlePageChange}
          state={state}
          dispatch={dispatch}
        />
      </RenderIf>
      <RenderIf predicate={page === 3}>
        <ThirdPage
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
        activeButton={activeButton}
        titleInfo={titleInfo}
            handleType={handleType}
           response={response}
           ETLData={ETLData}
           handleBack={handleBack}
           state={state}
           dispatch={dispatch}
           handlePageChange={handlePageChange}
        />
      </RenderIf>
      <RenderIf predicate={page === 4}>
        <FourthPage
        selectedOption={selectedOption}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
          ETLData={ETLData}
          handleBack={handleBack}
          state={state}
          dispatch={dispatch}
          handlePageChange={handlePageChange}
        />
      </RenderIf>
      <RenderIf predicate={page === 5}>
        <FifthPage
          ETLData={ETLData}
          state={state}
          page={page}
          setClose={setClose}
        />
      </RenderIf>
    </>
  );
};

export default Questionnaire;
