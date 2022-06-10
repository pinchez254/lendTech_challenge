import React, { FC } from "react";

import "./index.css";

interface PaginationProps {
  counterState: any[];
  counterRef: any;
}

const Pagination: FC<PaginationProps> = ({ counterState, counterRef }) => {
  const [currentPage, setCurrentPage] = React.useState(counterRef.current);

  let maxPages = counterState.length + 5;
  let items = [];
  let leftSide = 0;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 1;
  if (rightSide > maxPages) rightSide = maxPages;

  for (let number = leftSide; number <= rightSide; number++) {
    if (number > 4) {
      items.push(
        <div
          key={number}
          className={
            number === currentPage ? "round-effect active" : "round-effect"
          }
          onClick={() => {
            setCurrentPage(number);
          }}
        >
          {number}
        </div>
      );
    }
  }
  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log("---------------------------------------");
  console.log("currentPage", currentPage);
  console.log("maxPages", counterState);

  console.log("useref.current", counterRef.current);

  console.log("---------------------------------------");
  const paginationRender = (
    <div className="flex-container">
      <div>
        Counter {} {counterState[currentPage - 5] || "Null"}
      </div>

      <div className="paginate-ctn">
        <div className="round-effect" onClick={prevPage}>
          {" "}
          &lsaquo;{" "}
        </div>
        {items}
        <div className="round-effect" onClick={nextPage}>
          {" "}
          &rsaquo;{" "}
        </div>
      </div>
    </div>
  );
  return paginationRender;
};

export default Pagination;
