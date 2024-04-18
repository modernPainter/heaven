import { createStore } from 'vuex'
//import data from '@/store/modules/data'   //导入模块
export default createStore({
    // modules:{   //使用模块
    //     data,
    // }
    state: {
        person: {
            name: '是vuex里面state数据',
            age: 200
        }
    },
    getters: {
        getPerson(state) {
            return state.person
        }
    },
    mutations: {
        ageGrow(state, value) {
            state.person.age += value
        }
    },
    actions: {
        setAgeGrow(store, value) {
            setTimeout(() => {
                store.commit('ageGrow', value)
            }, 3000)
        }
    },
})
