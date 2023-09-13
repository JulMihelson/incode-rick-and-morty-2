import { useDispatch, useSelector } from "react-redux";
import css from "./Card.module.css";
import { useEffect } from "react";
import { fetchSingleCharacter } from "../../redux/Characters/actions";
import { selectCharacter } from "../../redux/selectors";

const Card = (id) => {
  const dispatch = useDispatch();
  const character = useSelector(selectCharacter);

  useEffect(() => {
    dispatch(fetchSingleCharacter());
  }, [dispatch]);

  return (
    <div className={css.card}>
      <img
        className={css.cardImage}
        src={character.image}
        alt={character.name}
      ></img>
      <div className={css.cardInfo}>
        <h2 className={css.cardTitle}>{character.name}</h2>
        <p className={css.creatureType}>
          {character.status} - {character.species}
        </p>

        <p className={css.locationType}>Last known location:</p>
        <p className={css.location}>{character.location.name}</p>
        <p className={css.locationType}>First seen in:</p>
        <p className={css.location}>{character.origin.name}</p>
      </div>
    </div>
  );
};
export default Card;
