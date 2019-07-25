import * as type from "./mutations-type";
import {getParcelsItems,addParcelsItem} from "../api";

const actions = {
    async addParcelItem({ commit }, toDoItem) {
        commit(type.ADD_PARCEL_ITEM, await addParcelsItem(toDoItem));
    },
    async requestParcelItems({ commit }) {
        commit(type.SAVE_PARCEL_ITEMS, await getParcelsItems());
    }
    // async updateTodoItem({ commit }, toDoItem) {
    //     commit(type.UPDATE_TODO_ITEMS, await updateTodoItem(toDoItem.id, toDoItem));
    // },
    // async deleteTodoItem({ commit }, id) {
    //     await deleteTodoItem(id);
    //     commit(type.DELETE_TODO_ITEM, id);
    // },
    // setUserName({commit},userName){
    //     commit(type.SET_USER_NAME, userName);
    // }
}


export default actions
