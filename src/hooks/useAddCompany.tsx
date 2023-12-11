import { useDispatch } from "react-redux";
import { addCompany } from "../store/companiesSlice";
import { generateID } from "../helpers/generateID";

export const useAddCompany = () => {
  const dispatch = useDispatch();

  return (name, address) => {
    if (name === "" || address === "") return;

    const data = {
      id: generateID(24),
      name,
      isActive: false,
      address,
      employess: [],
    };

    return dispatch(addCompany(data));
  };
};
