import css from "./GalleryItem.module.css";

const GalleryItem = (character) => {
  console.log(character, "galleryItem");
  return (
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
  );
};

export default GalleryItem;
