import { useDispatch } from "react-redux";
import { updateCompanies } from "../store/companiesSlice";

export const useUpdateCompanies = (data) => {
  const dispatch = useDispatch();

  return (checkbox?) => {
    if (checkbox === "checkbox") {
      return dispatch(updateCompanies({ ...data, isActive: !data.isActive }));
    }
    return dispatch(updateCompanies(data));
  };
};
