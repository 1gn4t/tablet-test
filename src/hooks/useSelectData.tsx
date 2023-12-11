import { useSelector } from "react-redux";

export const useSelectData = (value) => {
  if (value === "employess") {
    return useSelector((state) => state.companies.employess);
  }
  return useSelector((state) => state.companies.data);
};
