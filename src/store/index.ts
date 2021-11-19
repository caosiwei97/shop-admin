import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { IUserInfo } from '@/api/types/common'
import { getItem, setItem } from '@/utils/storage'
import { USER } from '@/utils/constants'

const state = {
  isCollapse: false,
  user: getItem<IUserInfo>(USER)
}
export type State = typeof state
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state,
  mutations: {
    setIsCollapse(state, payload) {
      state.isCollapse = payload
    },
    setUser(state, payload) {
      state.user = payload
      setItem(USER, state.user)
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
