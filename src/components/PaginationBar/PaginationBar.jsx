import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Замініть "yourReducer" на шлях до вашого редуктора та дій
import { Pagination } from "antd";
import { onPageChange } from "../../redux/Characters/CharactersSlice";
import { fetchCharacters } from "../../redux/Characters/actions";
// import "antd/dist/antd.css"; // Підключіть стилі Ant Design

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
    dispatch(fetchCharacters()); // Виконайте запит на дані при зміні сторінки
  }, [currentPage, dispatch]);

  return (
    <Pagination
      current={currentPage}
      onChange={handlePageChange}
      pageSize={itemsPerPage}
      total={totalPageCount}
    />
  );
};

export default PaginationBar;

// import React, { useEffect, useState } from "react";
// import { Pagination } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCharacters } from "../../redux/Characters/actions";
// import {
//   selectCharacters,
//   selectCurrentPage,
//   selectInfoPages,
// } from "../../redux/selectors";
// import { useParams } from "react-router-dom";
// import { onPageChange } from "../../redux/Characters/CharactersSlice";

// const PaginationBar = () => {
//   const dispatch = useDispatch();
//   const characters = useSelector(selectCharacters);
//   const respLength = useSelector(selectInfoPages);
//   const [currentPage, setCurrentPage] = useState();

//   // const currentPage = useSelector(selectCurrentPage);

//   console.log(respLength, "length of pages");
//   const page = useParams();

//   useEffect(
//     (currentPage) => {
//       dispatch(fetchCharacters());
//     },
//     [dispatch, currentPage]
//   );

//   const handleChange = () => {
//     dispatch(setCurrentPage(currentPage));
//   };

//   return (
//     <Pagination
//       current={}
//       onChange={handleChange}
//       pageSize={}
//       total={}
//     />
//   );
// };
// export default PaginationBar;
