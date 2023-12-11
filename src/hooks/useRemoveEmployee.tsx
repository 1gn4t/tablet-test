import { useDispatch } from "react-redux";
import { removeEmployess } from "../store/companiesSlice";

export const useRemoveEmployess = ({ employee, title }) => {
  const dispatch = useDispatch();

  return () => dispatch(removeEmployess({ employee, title }));
};
