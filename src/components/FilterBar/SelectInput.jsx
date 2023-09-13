// import React, { useEffect, useState } from "react";
// import { Cascader } from "antd";
// import { useDispatch } from "react-redux";
// import { fetchLocations } from "../../redux/Loactions/actions";
// import { fetchEpisodes } from "../../redux/Episodes/actions";
// import { fetchCharacters } from "../../redux/Characters/actions";
// import axios from "axios";
// const SelectInput = () => {
//   const dispatch = useDispatch();

//   const [locations, setLocations] = useState([]);
//   const [episodes, setEpisodes] = useState([]);
//   const [characters, setCharacters] = useState([]);
//   const [selectedFilters, setSelectedFilters] = useState({
//     type: null,
//     filterName: null,
//   });

//   const fetchFilteredData = async () => {
//     try {
//       const response = await axios.get(
//         `/character?${params.type}&${params.filterName}`,
//         {
//           params: {
//             type: selectedFilters.type,
//             filterName: selectedFilters.filterName,
//           },
//         }
//       );

//       const filteredData = response.data;
//       console.log(filteredData);
//     } catch (error) {
//       console.error("Error fetching filtered data:", error);
//     }
//   };

//   const onChange = (value) => {
//     const [type, filterName] = value[0].split(":");

//     setSelectedFilters({
//       type,
//       filterName,
//     });
//   };

//   useEffect(() => {
//     dispatch(fetchLocations())
//       .then((response) => {
//         const locationsList = response.payload;
//         const locations = locationsList.map((item) => ({
//           label: item.name,
//           value: `location:${item.name}`,
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
//           value: `episode:${item.name}`, // Використовувати ім'я для фільтрації
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
//           value: `character:${item.name}`, // Використовувати ім'я для фільтрації
//         }));
//         setCharacters(characters);
//       })
//       .catch((error) => {
//         console.error("Error fetching characters:", error);
//       });
//   }, [dispatch]);

//   return (
//     <div>
//       <Cascader
//         style={{
//           width: "100%",
//         }}
//         options={[
//           {
//             label: "Location",
//             value: "location",
//             children: locations,
//           },
//           {
//             label: "Episode",
//             value: "episode",
//             children: episodes,
//           },
//           {
//             label: "Character",
//             value: "character",
//             children: characters,
//           },
//         ]}
//         onChange={onChange}
//         placeholder="Search"
//         showSearch
//       />
//       <button onClick={fetchFilteredData}>Знайти</button>
//     </div>
//   );
// };

// export default SelectInput;

import { Cascader } from "antd";
import { useDispatch } from "react-redux";
import { fetchLocations } from "../../redux/Loactions/actions";
import { useEffect, useState } from "react";
import { fetchEpisodes } from "../../redux/Episodes/actions";
import { fetchCharacters } from "../../redux/Characters/actions";

const SelectInput = () => {
  const dispatch = useDispatch();

  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    location: null,
    episode: null,
    character: null,
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

  const onChange = (value) => {
    console.log(value);
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
      label: "Charcter",
      value: "character",
      children: characters,
    },
  ];

  return (
    <Cascader
      style={{
        width: "100%",
      }}
      options={optionsWithLabel}
      onChange={onChange}
      multiple
      maxTagCount="responsive"
    />
  );
};

export default SelectInput;
