import axios from "./config";

export const updateParcelItem = (id, updateItem) => axios.put(`/parcels/${id}`, updateItem);
export const updateParcelItemWithoutId = (updateItem) => axios.put("/parcels/", updateItem);
// export const deleteTodoItem = id => axios.delete(`/todos/${id}`);

export const getParcelsItems = () => axios.get("/parcels");

export const addParcelItem = parcelsItem => axios.post("/parcels", parcelsItem);
