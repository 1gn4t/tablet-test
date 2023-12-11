import { useUpdateCompanies } from "../hooks/useUpdateCompanies";

export const Checkbox = ({ valueName, company, setCompany }) => {
  const update = useUpdateCompanies(company);

  return <input type="checkbox" checked={company[valueName]} />;
};
