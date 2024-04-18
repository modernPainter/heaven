export default {
    namespaced: true,    //代表该模块带有独立命名空间,否则，默认是处于全局命名空间，就和非模块化一样
    state: {
        personList: [
        ]
    },
    mutations: {
        addMutation(state, value) {
            state.personList.push(value)
        },
        removeMutaion(state, value) {
            state.personList = state.personList.filter((el) => el.id != value.id)
        }
    },
    actions: {
        addAction(store, value) {
            setTimeout(() => {
                store.commit('addMutation', value)
            }, 1000);
        },
        removeAction(store, value) {
            store.commit('removeMutaion', value)
        }
    },
    getters: {
        personList(state) {
            return state.personList
        }
    }
}
