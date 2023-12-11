import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table } from "./components/Table";
import { useSelectData } from "./hooks/useSelectData";
import { setEmployess } from "./store/companiesSlice";

function App() {
  const dispatch = useDispatch();

  const companies = useSelectData("companies");
  const employess = Object.entries(useSelectData("employess"));

  useEffect(() => {
    dispatch(setEmployess());
  }, [companies]);

  return (
    <>
      <Table data={companies} title={"Companies"} type={"companies"} />
      {employess.map((item) => {
        if (employess.includes(item)) {
          return (
            <Table
              key={item[0]}
              data={item[1]}
              title={item[0]}
              type={"employess"}
            />
          );
        }
      })}
    </>
  );
}

export default App;
