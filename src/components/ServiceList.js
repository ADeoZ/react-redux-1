import { useSelector, useDispatch } from "react-redux";
import { removeService, changeServiceField, changeEditableServiceFields, deleteEditableServiceFields } from "../actions/actionCreators";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const filter = useSelector((state) => state.serviceFilter);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    return () => {
      dispatch(removeService(id));
      dispatch(deleteEditableServiceFields(id));
    }
  }

  const handleEdit = (id) => {
    return () => {
      const item = items.find((item) => item.id === id);
      dispatch(changeServiceField('name', item.name));
      dispatch(changeServiceField('price', item.price));
      dispatch(changeEditableServiceFields(item.id));
    }
  }

  return (
    <ul>
      {items.filter((item) => item.name.includes(filter))
        .map((item) =>
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={handleEdit(item.id)}>✎</button>
            <button onClick={handleRemove(item.id)}>✖</button>
          </li>
        )}
    </ul>
  );
}