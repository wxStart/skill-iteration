import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSetupStore = defineStore('step', () => {
  let i = 0
  const lists = ref([
    {
      id: ++i,
      title: `我是${i}`
    },
    {
      id: ++i,
      title: `我是${i}`
    }
  ])
  // 计算属性
  const ids = computed(() => {
    return lists.value.map((el) => el.id)
  })
  return {
    lists,
    ids,
    updateTodo() {
      lists.value.push({
        id: ++i,
        title: `我是${i}`
      })
    }
  }
})
