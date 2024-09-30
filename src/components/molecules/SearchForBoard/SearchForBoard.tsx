import styled from "./style.ts";
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "@src/provider/ModalProvider.tsx";
import Alert from "@components/atoms/Alert";
import { BoardFiltersProps } from "@src/interfaces/common-interface.ts";

const SEARCH_TYPE_LIST: {
  label: string;
  value: string;
}[] = [
  {
    label: "제목",
    value: "title",
  },
  {
    label: "내용",
    value: "body",
  },
];

const SearchForBoard = ({
  onSearch,
  onResetSearch,
  filters,
}: {
  onSearch: (newFilters: Pick<BoardFiltersProps, "filterType" | "searchStr">) => void;
  onResetSearch: () => void;
  filters: BoardFiltersProps;
}) => {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState<string>("title");
  const [searchStr, setSearchStr] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const { showModal, closeModal } = useModal();

  const handleChange = (event: SelectChangeEvent) => {
    setFilterType(event.target.value as string);
  };

  const handleSearch = () => {
    if (searchStr === "") {
      showModal(Alert, {
        message: "검색어를 입력하세요.",
        confirmButtonLabel: "확인",
        onClose: closeModal,
      });
    } else {
      setIsSearch(true);
      onSearch({ filterType, searchStr });
    }
  };

  const handleResetSearch = () => {
    setIsSearch(false);
    onResetSearch();
  };

  useEffect(() => {
    setFilterType(filters.filterType);
    setSearchStr(filters.searchStr);
  }, [filters.filterType, filters.searchStr]);

  return (
    <>
      <div css={styled.wrapper}>
        <div css={styled.leftContainer}>
          <div>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={filterType}
              size={"small"}
              onChange={handleChange}
            >
              {SEARCH_TYPE_LIST.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <TextField
              placeholder={"검색"}
              value={searchStr}
              size={"small"}
              onChange={(e) => setSearchStr(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>
          <Button variant="outlined" onClick={handleSearch}>
            검색
          </Button>
          {isSearch && (
            <Button color={"info"} onClick={handleResetSearch}>
              검색 취소
            </Button>
          )}
        </div>
        <div css={styled.rightContainer}>
          <Button variant="contained" onClick={() => navigate(`../write`)}>
            글쓰기
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchForBoard;
