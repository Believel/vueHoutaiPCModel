import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    name: 'this is vuex store name',
    refreshstr: ''
}
const mutations = {
    changeName(state, str) {
        state.name = str
    },
    SAVEREFRESHNAME(state, str) {
        state.refreshstr = str;
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
