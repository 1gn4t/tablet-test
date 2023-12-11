import { useSelectData } from "../hooks/useSelectData";
import { useVirtualizedList } from "../hooks/useVirtualizedList";
import { TableRow } from "./TableRow";

export const EmployessTable = () => {
  const data = useSelectData("employess");
  console.log(data);

  const { virtualList, wrap, styleRow } = useVirtualizedList(data, 40, 3);

  return (
    <>
      <h2>{}</h2>
      {wrap(
        <table>
          <tbody>
            {virtualList().map((item) => (
              <TableRow key={item.id} data={item} style={styleRow} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
