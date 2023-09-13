import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GalleryItem from "./GalleryItem";
import css from "./GalleryList.module.css";
import FilterBar from "../FilterBar/FilterBar";
import PaginationBar from "../PaginationBar/PaginationBar";
import { fetchCharacters } from "../../redux/Characters/actions";
import { selectCharacters } from "../../redux/selectors";

const GalleryList = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <section className={css.gallerySection}>
      <FilterBar />
      <ul className={css.galleryList}>
        {characters.map((character) => (
          <GalleryItem key={character.id} {...character} />
        ))}
      </ul>
      <PaginationBar />
    </section>
  );
};

export default GalleryList;
