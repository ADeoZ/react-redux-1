import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, RESET_SERVICE_FIELDS, CHANGE_EDITABLE_SERVICE_FIELDS, EDIT_SERVICE, DELETE_EDITABLE_SERVICE_FIELDS, CHANGE_FILTER_FIELD } from "./actionTypes";

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function resetServiceFields() {
  return { type: RESET_SERVICE_FIELDS };
}

export function changeEditableServiceFields(id) {
  return { type: CHANGE_EDITABLE_SERVICE_FIELDS, payload: { id } };
}

export function deleteEditableServiceFields(id) {
  return { type: DELETE_EDITABLE_SERVICE_FIELDS, payload: { id } };
}

export function changeFilterField(value) {
  return { type: CHANGE_FILTER_FIELD, payload: { value } };
}