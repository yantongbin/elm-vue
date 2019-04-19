import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 放数据的
    catData: localStorage.getItem('catData') ? JSON.parse(localStorage.getItem('catData')) : []// 购物车数据
  },
  getters: {
    // 对数据对的二次计算
    goodCatNum (state) {
      var total = 0
      state.catData.map(item => {
        total += item.num
      })
      return total
    }
  },

  mutations: {
    // 唯一能修改state的东西
    // state就是上面的state
    // 添加商品
    catAdd (state, data) {
      var index = state.catData.findIndex(item => item.item_id === data.item_id)

      if (index > -1) {
        state.catData[index].num += 1
      } else {
        state.catData.push(Object.assign({}, data, { num: 1 }))
      }
      localStorage.setItem('catData', JSON.stringify(state.catData))
    },

    // 减少商品
    catReduce (state, data) {
      var index = state.catData.findIndex(item => item.item_id === data.item_id)
      if (index > -1) {
        if (state.catData[index].num === 1) {
          state.catData.splice(index, 1)
        } else {
          state.catData[index].num -= 1
        }
      }
      localStorage.setItem('catData', JSON.stringify(state.catData))
    },

    changeName (state) {
      state.name = 'xxx'
    }
  },

  actions: {
    // 可以多次调用matution
  }
})
export default store
