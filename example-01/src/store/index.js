import { createStore } from 'vuex'

export const store = createStore({
    state(){
        return {
            count: 666
        }
    },
    mutations: {
        add(state) {
            state.count++
        }
    }
})