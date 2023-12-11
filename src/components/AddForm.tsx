import { useAddCompany } from "../hooks/useAddCompany";

export const AddForm = () => {
  const add = useAddCompany();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const address = e.target.address.value;
        add(name, address);
        e.target.reset();
      }}
      style={{
        height: 40,
      }}
    >
      <label>
        <input type={"text"} placeholder={"name"} name="name" />
      </label>
      <label>
        <input type={"text"} placeholder={"address"} name="address" />
      </label>
      <input style={{ width: "100%" }} className="SubmitButton" type="submit" />
    </form>
  );
};
