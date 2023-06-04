import { useLayoutEffect } from "react";
import initializeDefaultConfigForAxios from "./initializeDefaultConfigForAxios";

const useNetworking = () => {
  useLayoutEffect(() => {
    initializeDefaultConfigForAxios();
  }, []);
};

export default useNetworking;
