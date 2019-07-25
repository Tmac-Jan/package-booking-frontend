import Vue from "vue";
import * as type from "./mutations-type";

const mutations = {

    [type.UPDATE_TODO_ITEMS](state, toDoItem) {
        Vue.set(state.todoItemList, toDoItem.id - 1, toDoItem);
    },

    [type.ADD_PARCEL_ITEM](state, parcelItemList) {
        state.parcelItemList.push(parcelItemList);
    },

    [type.SAVE_PARCEL_ITEMS](state, parcelItemList) {
        state.parcelItemList = parcelItemList;
    },

    // [type.DELETE_TODO_ITEM](state, id) {
    //     const deleteIndex = state.todoItemList.findIndex(x => x.id === id);
    //     state.todoItemList.splice(deleteIndex, 1);
    //
    // },
    // [type.SET_USER_NAME](state,userName){
    //     state.userName=userName;
    // }

}
export default mutations
