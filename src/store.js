import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    name: 'this is vuex store name'
}
const mutations = {
    changeName(state, str) {
        state.name = str
    }
}
const getters = {}
const actions = {}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
