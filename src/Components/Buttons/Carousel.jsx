import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({state, dispatch, handleOptionClick, selectedOption}) => {
  

  const renderOptions = () => {
    const options = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    console.log("triplice")
    console.log(selectedOption)
    console.log(state.installments)
    return options.map((option) => (
      <button
        key={option}
        className={state.installments === option ? 'active' : ''}
        onClick={() => handleOptionClick(option)}
      >
        {option}x
      </button>
    ));
  };

  return (
    <div className="carousel">
    <h2>Selecione a quantidade de parcelas:</h2>
    <div className="options-grid">{renderOptions()}</div>
    <p>Opção selecionada: {state.installments}x</p>
  </div>
  );
};

export default Carousel;