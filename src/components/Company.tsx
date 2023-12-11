import { useState, memo } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useRemoveCompany } from "../hooks/useRemoveCompany";
import { Input } from "./Input";

export const Company = memo(({ data, style }) => {
  const [company, setCompany] = useState(data);

  const remove = useRemoveCompany(company);

  return (
    <tr style={{ ...style, backgroundColor: company.isActive && "Orchid" }}>
      <th>
        <Input
          type={"checkbox"}
          value={"isActive"}
          data={company}
          setData={setCompany}
        />
      </th>
      <th>
        <Input
          type={"text"}
          value={"name"}
          data={company}
          setData={setCompany}
        />
      </th>
      <th>{data.employess.length}</th>
      <th>
        <Input
          type={"text"}
          value={"address"}
          data={company}
          setData={setCompany}
        />
      </th>
      <th>
        <button onClick={() => remove()}>remove</button>
      </th>
    </tr>
  );
});
