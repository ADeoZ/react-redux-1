import { useSelector, useDispatch } from "react-redux";
import { changeServiceField, addService, resetServiceFields, editService } from "../actions/actionCreators";

export default function ServiceAdd() {
  const { fields: item, edit } = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit.isEdit) {
      dispatch(editService(edit.id, item.name, item.price));
    } else {
      dispatch(addService(item.name, item.price));
    }
    dispatch(resetServiceFields());
  }

  const handleCancel = () => {
    dispatch(resetServiceFields());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button>Save</button>
      {edit.isEdit && <button onClick={handleCancel}>Cancel</button>}
    </form>
  );
}