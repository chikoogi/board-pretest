import styled from "./style.ts";
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SEARCH_TYPE_LIST = [
  {
    label: "제목",
    value: "title",
  },
  {
    label: "내용",
    value: "body",
  },
];

const SearchForBoard = ({ boardType, onSearch }: any) => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState<string>("title");
  const [searchStr, setSearchStr] = useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setSearchType(event.target.value as string);
  };

  return (
    <>
      <div css={styled.wrapper}>
        <div css={styled.leftContainer}>
          <div>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={searchType}
              label="Type"
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
              onChange={(e) => setSearchStr(e.target.value)}
            />
          </div>
          <Button onClick={() => onSearch({ searchType, searchStr })}>검색</Button>
        </div>
        <div css={styled.rightContainer}>
          <Button onClick={() => navigate(`../write`)}>글쓰기</Button>
        </div>
      </div>
    </>
  );
};

export default SearchForBoard;
