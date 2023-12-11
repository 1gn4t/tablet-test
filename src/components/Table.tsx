import { useVirtualizedList } from "../hooks/useVirtualizedList";
import { AddForm } from "./AddForm";
import { Company } from "./Company";
import { Employee } from "./Employee";

export const Table = ({ data, title, type }) => {
  const { virtualList, wrap, styleRow } = useVirtualizedList(data, 40, 3);

  return (
    <>
      <h2>{title}</h2>
      <div style={{ display: "flex" }}>
        {wrap(
          <table>
            <tbody>
              {virtualList().map((item) => {
                if (type === "employess") {
                  return (
                    <Employee key={item.id} data={item} style={styleRow} />
                  );
                }
                if (type === "companies") {
                  return <Company key={item.id} data={item} style={styleRow} />;
                }
              })}
            </tbody>
          </table>
        )}
        {type === "companies" && <AddForm />}
      </div>
    </>
  );
};
