import { defineStore } from 'pinia'

const useOptionsStore = defineStore('options', {
  // state 现在是一个函数了，在vuex的时候是一个对象  ，并且没有了mutations
  state: () => {
    return {
      number: 99
    }
  },
  getters: {
    preNumer(state) {
      return '我是number的前置' + state.number
    }
  },
  actions: {
    changeNumber(num: number) {
      this.number += num
    }
  }
})

export { useOptionsStore }
