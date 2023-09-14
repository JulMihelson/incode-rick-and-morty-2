import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import css from "./Card.module.css";
import { fetchSingleCharacter } from "../../redux/Characters/actions";
import { selectCharacter } from "../../redux/selectors";

const Card = () => {
  const { id } = useParams();
  // console.log(id, "wtf");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCharacter(id));
  }, [dispatch, id]);

  const character = useSelector(selectCharacter);

  // const { image, name, status, species, location, origin } = character;
  // console.log(character, "whole character destr");
  if (!character) {
    return;
  }
  return (
    character && (
      <div className={css.card}>
        <img
          className={css.cardImage}
          src={character.image}
          alt={character.name}
        />
        <div className={css.cardInfo}>
          <h2 className={css.cardTitle}>{character.name}</h2>
          <p className={css.creatureType}>
            {character.status} - {character.species}
          </p>
          <p className={css.locationType}>Last known location:</p>
          <p className={css.location}>{character.location.name}</p>
          <p className={css.locationType}>First seen in:</p>
          <p className={css.location}>{origin.name}</p>
        </div>
      </div>
    )
  );
};

export default Card;
