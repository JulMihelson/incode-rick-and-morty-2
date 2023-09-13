import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { fetchCharacters } from "./redux/Characters/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <>
      <Layout />
    </>
  );
};

export default App;
