import React, { useReducer } from "react";
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
  ETLData
}) => {


  return (
    <>
      <RenderIf predicate={page === 1}>
        <FirstPage handlePageChange={handlePageChange} currentPage={page} state={state} dispatch={dispatch}/>
      </RenderIf>
      <RenderIf predicate={page === 2}>
        <SecondPage handleBack={handleBack} handlePageChange={handlePageChange} state={state} dispatch={dispatch}/>
      </RenderIf>
      <RenderIf predicate={page === 3}>
        <ThirdPage handleBack={handleBack} handlePageChange={handlePageChange} state={state} dispatch={dispatch}/>
      </RenderIf>
      <RenderIf predicate={page === 4}>
        <FourthPage ETLData={ETLData} handleBack={handleBack} state={state} dispatch={dispatch}/>
      </RenderIf>
      <RenderIf predicate={page === 5}>
        <FifthPage state={state} dispatch={dispatch}/>
      </RenderIf>
    </>
  );
};

export default Questionnaire;