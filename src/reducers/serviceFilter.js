import { CHANGE_FILTER_FIELD } from "../actions/actionTypes";

const initial_state = '';

export default function serviceFilterReducer(state = initial_state, action) {
  switch (action.type) {
    case CHANGE_FILTER_FIELD:
      const { value } = action.payload;
      return value;
    default:
      return state;
  }
}