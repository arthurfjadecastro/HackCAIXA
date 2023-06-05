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
  // const [state, dispatch] = useReducer(reducer, {cpf: 0, phoneNumber: "",monetaryValue: "",installments: ""})
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