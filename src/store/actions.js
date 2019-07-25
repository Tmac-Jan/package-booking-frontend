import * as type from "./mutations-type";
import {getParcelsItems,addParcelItem,updateParcelItem} from "../api";

const actions = {
    async addParcelItem({ commit }, toDoItem) {
        commit(type.ADD_PARCEL_ITEM, await addParcelItem(toDoItem));
    },
    async requestParcelItems({ commit }) {
        commit(type.SAVE_PARCEL_ITEMS, await getParcelsItems());
    },
    async updateParcelItem({ commit }, toDoItem) {
        commit(type.UPDATE_TODO_ITEMS, await updateParcelItem(toDoItem.id, toDoItem));
    },

}


export default actions
