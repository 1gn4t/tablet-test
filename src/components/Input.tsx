import { useUpdateCompanies } from "../hooks/useUpdateCompanies";

export const Input = ({ value, data, setData, type }) => {
  const update = useUpdateCompanies(data);

  const handlerChange = (e, name) => {
    if (type === "checkbox") {
      setData({ ...data, isActive: !data.isActive });
      update("checkbox");
    } else {
      setData({ ...data, [name]: e.target.value });
    }
  };

  const handlerKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      update();
      e.target.blur();
    }
  };

  return (
    <input
      checked={data[value]}
      type={type}
      value={data[value]}
      onChange={(e) => handlerChange(e, value)}
      onKeyDown={(e) => handlerKeyDown(e)}
    />
  );
};
