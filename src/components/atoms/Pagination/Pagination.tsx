import { useState } from "react";
import { ChevronLeft, ChevronRight, FirstPage, LastPage } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import styled from "./style.ts";

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
    const pages = [];
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
    <div className="pagination" css={styled.wrapper}>
      <IconButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        <FirstPage />
      </IconButton>

      <IconButton onClick={handlePrevSet} disabled={currentPage <= maxPageNumbers}>
        <ChevronLeft />
      </IconButton>
      <div css={styled.pageContainer}>
        {getPageNumbers().map((page) => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            className={page === currentPage ? "active" : ""}
            css={styled.btnWrapper(currentPage === page)}
          >
            {page}
          </Button>
        ))}
      </div>

      <IconButton onClick={handleNextSet} disabled={currentPage > totalPages - maxPageNumbers}>
        <ChevronRight />
      </IconButton>

      <IconButton onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        <LastPage />
      </IconButton>
    </div>
  );
};

export default Pagination;
