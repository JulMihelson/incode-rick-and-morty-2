import css from "./FilterBtn.module.css";
import axios from "axios";

const FilterBtn = (selectedFilters) => {
  const handleSubmit = async () => {
    try {
      const response = await axios.get("/character", {
        params: selectedFilters,
      });
      const filteredData = response.data;
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };
  return (
    <button onClick={handleSubmit} className={css.filterBtn} type="button">
      find
    </button>
  );
};

export default FilterBtn;
