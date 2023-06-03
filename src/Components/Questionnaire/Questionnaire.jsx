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
}) => {
  return (
    <>
      <RenderIf predicate={page === 1}>
        <FirstPage/>
      </RenderIf>
      <RenderIf predicate={page === 2}>
        <SecondPage/>
      </RenderIf>
      <RenderIf predicate={page === 3}>
        <ThirdPage/>
      </RenderIf>
      <RenderIf predicate={page === 4}>
        <FourthPage/>
      </RenderIf>
      <RenderIf predicate={page === 5}>
        <FifthPage/>
      </RenderIf>
    </>
  );
};

export default Questionnaire;