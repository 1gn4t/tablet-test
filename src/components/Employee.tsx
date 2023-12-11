import { useState, memo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useRemoveCompany } from "../hooks/useRemoveCompany";
import { Input } from "./Input";

export const Employee = memo(({ data, style }) => {
  const [employee, setEmployee] = useState(data);

  return (
    <tr style={{ ...style, backgroundColor: employee.isActive && "Khaki" }}>
      <th>
        <Input
          type={"checkbox"}
          value={"isActive"}
          data={employee}
          setData={setEmployee}
        />
      </th>
      <th>
        <Input
          type={"text"}
          value={"firstName"}
          data={employee}
          setData={setEmployee}
        />
      </th>
      <th>
        <Input
          type={"text"}
          value={"surname"}
          data={employee}
          setData={setEmployee}
        />
      </th>
      <th>
        <Input
          type={"text"}
          value={"job"}
          data={employee}
          setData={setEmployee}
        />
      </th>
    </tr>
  );
});
