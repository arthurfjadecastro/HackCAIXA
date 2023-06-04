import axios from "axios";
import React, { useEffect, useState } from "react";


const FourthPage = ({}) => {
  
  const [value, setValue] = useState();

  useEffect(() => {
    axios.post("https://apphackaixades.azurewebsites.net/api/Simulacao",{
      valorDesejado: 900,
      prazo: 5
 })
      .then((response) => setValue(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  console.log(value)

  return (
    <>
      <h1>Fourth Page</h1>
    </>
  );
};

export default FourthPage;