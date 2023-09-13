import { Link } from "react-router-dom";
import css from "./GalleryItem.module.css";

const GalleryItem = (character) => {
  console.log({ character }, "galleryItem");
  const path = `/character/${character.id}`;
  return (
    <Link id={character.id} character={character} to={path}>
      <li className={css.card}>
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
      </li>
    </Link>
  );
};

export default GalleryItem;
