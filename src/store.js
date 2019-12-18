import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/lib/api';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        bookmakers: [],
        countries: []
    },

    getters: {
        bookmakers: state => state.bookmakers,

        countries: state => state.countries
    },

    mutations: {
        GET_BOOKMAKERS(state, response) {
            state.bookmakers = response;
        },

        GET_COUNTRIES(state, response) {
            state.countries = response;
        },

        TOGGLE_ACTIVE(state, index) {
            state.bookmakers[index].active = state.bookmakers[index].active ? 0 : 1;
        },

        REMOVE_LINk(state, [index, key]) {
            delete state.bookmakers[index].links[key];
        }
    },

    actions: {
        getBookmakers({commit}) {
            api.get_bookmakers().then(response => {
                commit('GET_BOOKMAKERS', response);
            })

        },

        getCountries({commit}) {
            api.get_countries().then(response => {
                commit('GET_COUNTRIES', response);
            })
        }
    }
})

export default store;
