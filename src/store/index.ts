import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

const state = {
  isCollapse: false
}
export type State = typeof state
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state,
  mutations: {
    setIsCollapse(state, payload) {
      state.isCollapse = payload
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
