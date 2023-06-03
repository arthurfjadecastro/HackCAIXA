import React from "react";
// import {
//   FirstPage,
//   SecondPage,
//   ThirdPage,
//   FourthPage,
//   FifthPage,
// } from "./Pages";
import { RenderIf } from "../Utils";

const Questionnaire = ({
  page,
}) => {
  return (
    <>
      <RenderIf predicate={page === 1}>
        <h1>1</h1>
        {/* <FirstPage theme={theme} /> */}
      </RenderIf>
      <RenderIf predicate={page === 2}>
      <h1>2</h1>
        {/* <SecondPage handleNextPage={handleNextPage} /> */}
      </RenderIf>
      <RenderIf predicate={page === 3}>
      <h1>3</h1>
        {/* <ThirdPage handleNextPage={handleNextPage} /> */}
      </RenderIf>
      <RenderIf predicate={page === 4}>
      <h1>4</h1>
        {/* <FourthPage handleNextPage={handleNextPage} theme={theme} /> */}
      </RenderIf>
      <RenderIf predicate={page === 5}>
      <h1>5</h1>
        {/* <FifthPage
          handleChangePage={handleChangePage}
          state={registeringState}
          dispatch={registeringDispatch}
        /> */}
      </RenderIf>
    </>
  );
};

export default Questionnaire;