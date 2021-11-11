import { createStore } from 'vuex'
// import { createStore } from './gvuex.js'

export const store = createStore({
    state(){
        return {
            count: 666
        }
    },
    getters: {
        double(state) {
            return state.count * 2
        }
    },
    // 异步的数据变化
    actions: {
        asyncAdd({commit}) {
            setTimeout(() => {
                commit('add')
            },1000)
        }
    },
    // 同步的数据变化
    mutations: {
        add(state) {
            state.count++
        }
    }
})