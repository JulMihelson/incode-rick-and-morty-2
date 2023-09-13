import { useState } from "react";
// import css from "./PaginationBar.module.css";
import { Pagination } from "antd";

const PaginationBar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      PageSize={6}
      itemActiveBgDisabled={"rgba(0, 0, 0, 0.15)"}
      itemActiveColorDisabled={"#ffffff"}
      defaultCurrent={1}
      current={currentPage}
      total={20}
      onChange={(page, pageSize) => {
        setCurrentPage(page);
      }}
    />
  );
};
export default PaginationBar;
