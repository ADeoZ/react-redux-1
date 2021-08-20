import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from "../actions/actionTypes";

const initial_state = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
  { id: nanoid(), name: 'Замена аккумулятора', price: 4000 },
  { id: nanoid(), name: 'Замена микрофона', price: 2500 },
];

export default function serviceListReducer(state = initial_state, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    }
    case EDIT_SERVICE:
      const { id, name, price } = action.payload;
      return state.map((service) => service.id === id ? { ...service, name, price: Number(price) } : service);
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);
    }
    default:
      return state;
  }
}