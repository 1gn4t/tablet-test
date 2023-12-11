import { useDispatch } from "react-redux";
import { removeCompany } from "../store/companiesSlice";

export const useRemoveCompany = (data) => {
  const dispatch = useDispatch();

  return () => dispatch(removeCompany(data));
};
