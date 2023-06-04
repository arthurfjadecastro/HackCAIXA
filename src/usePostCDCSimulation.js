import { postCDCSimulation } from "../Requests";
import { useArgfulFiredRequest } from "react-requesting";
const usePostCDCSimulation = () => useArgfulFiredRequest(postCDCSimulation);
export default usePostCDCSimulation;
