import React from "react";
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
          response={response}
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
