import { Cascader } from "antd";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchLocations } from "../../redux/Loactions/actions";
import { fetchEpisodes } from "../../redux/Episodes/actions";
import { fetchCharacters } from "../../redux/Characters/actions";
import FilterBtn from "./FilterBtn"; // Імпортуємо компонент FilterBtn
import axios from "axios";
const SelectInput = () => {
  const dispatch = useDispatch();

  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    location: [],
    episode: [],
    character: [],
  });

  useEffect(() => {
    dispatch(fetchLocations())
      .then((response) => {
        const locationsList = response.payload;
        const locations = locationsList.map((item) => ({
          label: item.name,
          value: item.id,
        }));
        setLocations(locations);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
    dispatch(fetchEpisodes())
      .then((response) => {
        const episodesList = response.payload;
        const episodes = episodesList.map((item) => ({
          label: item.name,
          value: item.id,
        }));
        setEpisodes(episodes);
      })
      .catch((error) => {
        console.error("Error fetching episodes:", error);
      });
    dispatch(fetchCharacters())
      .then((response) => {
        const charactersList = response.payload;
        const characters = charactersList.map((item) => ({
          label: item.name,
          value: item.id,
        }));
        setCharacters(characters);
      })
      .catch((error) => {
        console.error("Error fetching episodes:", error);
      });
  }, [dispatch]);

  const onChange = (value, selectedOptions) => {
    const updatedFilters = { ...selectedFilters };

    // Для кожної обраної категорії, зберігайте відповідні id у відповідному масиві
    selectedOptions.forEach((option) => {
      if (option.value === "location") {
        updatedFilters.location = option.children.map((child) => child.value);
      } else if (option.value === "episode") {
        updatedFilters.episode = option.children.map((child) => child.value);
      } else if (option.value === "character") {
        updatedFilters.character = option.children.map((child) => child.value);
      }
    });

    setSelectedFilters(updatedFilters);
    console.log(updatedFilters); // Тут ви побачите оновлені фільтри з id
  };

  const optionsWithLabel = [
    {
      label: "Location",
      value: "location",
      children: locations,
    },
    {
      label: "Episode",
      value: "episode",
      children: episodes,
    },
    {
      label: "Character",
      value: "character",
      children: characters,
    },
  ];

  const onFilterSubmit = (filters) => {
    console.log("Filters submitted:", filters);
    try {
      const response = axios.get("/character", {
        params: {
          filters,
        },
      });

      const filteredData = response.data;
      console.log(filteredData);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  return (
    <div>
      <Cascader
        style={{
          width: "100%",
        }}
        options={optionsWithLabel}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
      />
      {/* Передайте selectedFilters і обробник події onFilterSubmit у компонент FilterBtn */}
      <FilterBtn
        selectedFilters={selectedFilters}
        onFilterSubmit={onFilterSubmit}
      />
    </div>
  );
};

export default SelectInput;

// import { Cascader } from "antd";
// import { useDispatch } from "react-redux";
// import { fetchLocations } from "../../redux/Loactions/actions";
// import { useEffect, useState } from "react";
// import { fetchEpisodes } from "../../redux/Episodes/actions";
// import { fetchCharacters } from "../../redux/Characters/actions";

// const SelectInput = () => {
//   const dispatch = useDispatch();

//   const [locations, setLocations] = useState([]);
//   const [episodes, setEpisodes] = useState([]);
//   const [characters, setCharacters] = useState([]);
//   const [selectedFilters, setSelectedFilters] = useState({
//     location: [],
//     episode: [],
//     character: [],
//   });
//   useEffect(() => {
//     dispatch(fetchLocations())
//       .then((response) => {
//         const locationsList = response.payload;
//         const locations = locationsList.map((item) => ({
//           label: item.name,
//           value: item.id,
//         }));
//         setLocations(locations);
//       })
//       .catch((error) => {
//         console.error("Error fetching locations:", error);
//       });
//     dispatch(fetchEpisodes())
//       .then((response) => {
//         const episodesList = response.payload;
//         const episodes = episodesList.map((item) => ({
//           label: item.name,
//           value: item.id,
//         }));
//         setEpisodes(episodes);
//       })
//       .catch((error) => {
//         console.error("Error fetching episodes:", error);
//       });
//     dispatch(fetchCharacters())
//       .then((response) => {
//         const charactersList = response.payload;
//         const characters = charactersList.map((item) => ({
//           label: item.name,
//           value: item.id,
//         }));
//         setCharacters(characters);
//       })
//       .catch((error) => {
//         console.error("Error fetching episodes:", error);
//       });
//   }, [dispatch]);

//   const onChange = (value) => {
//     console.log(value);
//   };

//   const optionsWithLabel = [
//     {
//       label: "Location",
//       value: "location",
//       children: locations,
//     },
//     {
//       label: "Episode",
//       value: "episode",
//       children: episodes,
//     },
//     {
//       label: "Charcter",
//       value: "character",
//       children: characters,
//     },
//   ];

//   return (
//     <Cascader
//       style={{
//         width: "100%",
//       }}
//       options={optionsWithLabel}
//       onChange={onChange}
//       multiple
//       maxTagCount="responsive"
//     />
//   );
// };

// export default SelectInput;
