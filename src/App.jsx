import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { fetchCharacters } from "./redux/Characters/actions";
import { useDispatch } from "react-redux";
import GalleryList from "./components/Gallery/GalleryList";
import { Navigate, Route, Routes } from "react-router-dom";
import Card from "./pages/Card/Card";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/character" />} />
        <Route path="/character" element={<GalleryList />} />
        <Route path="/character/:id" element={<Card />} />
      </Route>
    </Routes>
  );
};

export default App;
