import { useSelector, useDispatch } from "react-redux";
import { changeFilterField } from "../actions/actionCreators";

export default function ServiceFilter() {
  const filter = useSelector((state) => state.serviceFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(changeFilterField(value));
  }

  return (
    <div>
      Фильтр:
      <input name="filter" onChange={handleChange} value={filter} />
    </div>
  );
}