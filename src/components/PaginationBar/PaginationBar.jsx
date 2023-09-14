import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import { onPageChange } from "../../redux/Characters/CharactersSlice";
import { fetchCharacters } from "../../redux/Characters/actions";

const PaginationBar = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.characters.currentPage);
  const totalPageCount = useSelector((state) => state.characters.respLength);
  const itemsPerPage = useSelector((state) => state.characters.limit);

  const pageCount = Math.ceil(totalPageCount / itemsPerPage);

  const handlePageChange = (newPage) => {
    dispatch(onPageChange(newPage));
  };

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [currentPage, dispatch]);

  return (
    <Pagination
      current={currentPage}
      onChange={handlePageChange}
      pageSize={itemsPerPage}
      total={totalPageCount}
      showSizeChanger={false}
    />
  );
};

export default PaginationBar;
