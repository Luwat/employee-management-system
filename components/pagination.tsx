import React from "react";

const Pagination = ({
  pageSize,
  length,
  currentPage,
  onPageChange
}: {
  pageSize: number;
  length: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  let paginationNumber: number[] = [];

  for (let i = 1; i <= Math.ceil(length / pageSize); i++) {
    paginationNumber.push(i);
  }

  if (pageSize < 5 && currentPage === 1) {
    return null;
  }

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  const onNext = () => {
    if (currentPage < paginationNumber.length) {
      onPageChange(currentPage + 1);
    }
  }



  return (
    <ul className="flex justify-center">
      <li onClick={onPrevious} className={`cursor-pointer ${currentPage === 1? 'text-neutral-600 cursor-default' : ''}`}>Prev</li>
      {currentPage && <li  className="mx-10">{currentPage}</li>}
      <li onClick={onNext} className={`cursor-pointer ${currentPage === paginationNumber.length ? 'text-neutral-600 cursor-default' : ''}`}>Next</li>
    </ul>
  );
};

export default Pagination;
