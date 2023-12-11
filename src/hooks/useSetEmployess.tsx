import { useDispatch } from "react-redux";
import { setEmployess } from "../store/companiesSlice";

export const useSetEmployess = () => {
  const dispatch = useDispatch();

  return dispatch(setEmployess());
};
