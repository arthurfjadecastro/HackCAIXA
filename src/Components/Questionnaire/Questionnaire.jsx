import React, { useReducer } from "react";
import {
  FirstPage,
  SecondPage,
  ThirdPage,
  FourthPage,
  FifthPage,
} from "./Pages";
import { RenderIf } from "../Utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "cpf":
      return { ...state, cpf: action.payload };
    case "phoneNumber":
      return { ...state, phoneNumber: action.payload };
    case "monetaryValue":
      return { ...state, monetaryValue: action.payload };
    case "installments":
      return { ...state, installments: action.payload };
    default:
      return state;
  }
};


const Questionnaire = ({
  page,
}) => {
  const initialState = {
    cpf: "",
    phoneNumber: "",
    monetaryValue: "",
    installments: ""
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state")
  console.log(state)
  return (
    <>
      <RenderIf predicate={page === 1}>
        <FirstPage state={state} dispatch={dispatch}/>
      </RenderIf>
      <RenderIf predicate={page === 2}>
        <SecondPage state={state} dispatch={dispatch}/>
      </RenderIf>
      <RenderIf predicate={page === 3}>
        <ThirdPage state={state} dispatch={dispatch}/>
      </RenderIf>
      <RenderIf predicate={page === 4}>
        <FourthPage state={state} dispatch={dispatch}/>
      </RenderIf>
      <RenderIf predicate={page === 5}>
        <FifthPage state={state} dispatch={dispatch}/>
      </RenderIf>
    </>
  );
};

export default Questionnaire;