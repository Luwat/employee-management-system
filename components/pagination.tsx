import React from "react";

const Pagination = ({
  pageSize,
  length,
  currentPage,
}: {
  pageSize: number;
  length: number;
  currentPage: number;
}) => {
  let paginationNumber: number[] = [];

  for (let i = 1; i <= Math.ceil(length / pageSize); i++) {
    paginationNumber.push(i);
  }

  if (pageSize < 10 && currentPage === 1) {
    return null;
  }



  return (
    <ul>
      {paginationNumber.map((pageNumber) => {
        return <li key={pageNumber}>{pageNumber}</li>;
      })}
    </ul>
  );
};

export default Pagination;
