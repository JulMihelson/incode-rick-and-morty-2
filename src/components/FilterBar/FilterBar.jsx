import { Input } from "antd";
import css from "./FilterBar.module.css";
import FilterBtn from "./FilterBtn";
import { useDispatch, useSelector } from "react-redux";
import { applyFilter } from "../../redux/Characters/CharactersSlice";
import SelectInput from "./SelectInput";
import { selectFilter } from "../../redux/selectors";

const FilterBar = (handleSubmit) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <form className={css.filtreBar}>
      <button className={css.removeBtn}>remove filter</button>
      <SelectInput />
      <Input
        placeholder="Add key words to find"
        allowClear
        onPressEnter
        size="large"
        value={filter}
        onChange={(event) => dispatch(applyFilter(event.target.value))}
        style={{
          width: 260,
          fontFamily: "inherit",
          fontSize: 16,
          letterSpacing: 0.5,
        }}
      />
    </form>
  );
};
export default FilterBar;
