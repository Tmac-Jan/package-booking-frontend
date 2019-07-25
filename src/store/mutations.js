import Vue from 'vue'
import * as type from './mutations-type'

const mutations = {

  [type.UPDATE_TODO_ITEMS](state, toDoItem) {
    Vue.set(state.parcelItemList, toDoItem.id - 1, toDoItem)
  },

  [type.ADD_PARCEL_ITEM](state, parcelItemList) {
    state.parcelItemList.push(parcelItemList)
  },

  [type.SAVE_PARCEL_ITEMS](state, parcelItemList) {
    state.parcelItemList = parcelItemList
  },
  [type.UPDATE_TABTYPE](state, newTabType) {
    state.tabType = newTabType.tabType
  }
}
export default mutations
