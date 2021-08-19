import { CHANGE_EDITABLE_SERVICE_FIELDS, CHANGE_SERVICE_FIELD, DELETE_EDITABLE_SERVICE_FIELDS, RESET_SERVICE_FIELDS } from "../actions/actionTypes";

const initial_state = {
  fields: {
    name: '',
    price: '',
  },
  edit: {
    isEdit: false,
    id: '',
  }
};

export default function serviceAddReducer(state = initial_state, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, fields: { ...state.fields, [name]: value } };
    case RESET_SERVICE_FIELDS:
      return initial_state;
    case CHANGE_EDITABLE_SERVICE_FIELDS: {
      const { id } = action.payload;
      return { ...state, edit: { isEdit: true, id } };
    }
    case DELETE_EDITABLE_SERVICE_FIELDS:
      const { id } = action.payload;
      if (id === state.edit.id) {
        return { ...state, edit: { isEdit: false, id: '' } };
      } else return state;
    default:
      return state;
  }
}