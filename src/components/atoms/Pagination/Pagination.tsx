import { useState } from "react";

interface PaginationProps {
  totalItems: number; // 전체 아이템 수
  itemsPerPage: number; // 한 페이지에 보여줄 아이템 수
  currentPage: number; // 현재 페이지
  onPageChange: (page: number) => void; // 페이지 변경 시 호출할 함수
  maxPageNumbers?: number;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  maxPageNumbers = 10,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const startPage = Math.floor((currentPage - 1) / maxPageNumbers) * maxPageNumbers + 1;
    const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);
    let pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  // 이전 10페이지로 이동
  const handlePrevSet = () => {
    const newPage = Math.max(1, currentPage - maxPageNumbers);
    onPageChange(newPage);
  };

  // 다음 10페이지로 이동
  const handleNextSet = () => {
    const newPage = Math.min(totalPages, currentPage + maxPageNumbers);
    onPageChange(newPage);
  };

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        {"<<"}
      </button>

      <button onClick={handlePrevSet} disabled={currentPage <= maxPageNumbers}>
        {"<"}
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}

      <button onClick={handleNextSet} disabled={currentPage > totalPages - maxPageNumbers}>
        {">"}
      </button>

      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
