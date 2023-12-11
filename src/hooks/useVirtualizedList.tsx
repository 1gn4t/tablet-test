import { useState, useMemo, useCallback } from "react";

export const useVirtualizedList = (list, rowHeight, visibleRows) => {
  const [start, setStart] = useState(0);

  const getTopHeight = () => rowHeight * start;
  const getTopBottom = () => {
    if (rowHeight * (list.length - (start + visibleRows)) === rowHeight)
      return 0;
    return rowHeight * (list.length - (start + visibleRows));
  };

  const onScroll = (e) => {
    setStart(Math.floor(e.target.scrollTop / rowHeight));
  };

  const virtualList = () => list.slice(start, start + visibleRows + 1);

  const styleRow = { height: rowHeight };

  const wrap = useMemo(
    () => (Elem) =>
      (
        <>
          <div
            onScroll={onScroll}
            style={{
              height: rowHeight * visibleRows + 1,
              border: "1px solid black",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <div style={{ height: getTopHeight() }} />
            {Elem}
            <div style={{ height: getTopBottom() }} />
          </div>
        </>
      ),
    [getTopHeight, getTopBottom, onScroll]
  );

  return { virtualList, wrap, styleRow };
};
