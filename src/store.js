import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/lib/api';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        bookmakers: [],
        countries: [],
        filteredBookmakers: [],
        filterValue: '',
        options: []
    },

    getters: {
        bookmakers: state => state.bookmakers,

        countries: state => state.countries,

        filteredBookmakers: state => state.filteredBookmakers,

        isActive: (state) => (id) => {
            const index = state.bookmakers.findIndex(bookmaker => bookmaker.id == id);

            return state.bookmakers[index].active;
        }
    },

    mutations: {
        GET_BOOKMAKERS(state, response) {
            state.bookmakers = response;

            state.filteredBookmakers = response;

            state.options = response.map(item => {
                return {
                    id: item.id,
                    text: item.name
                }
            });
        },

        GET_COUNTRIES(state, response) {
            state.countries = response;
        },

        TOGGLE_ACTIVE(state, id) {
            const index = state.bookmakers.findIndex(bookmaker => bookmaker.id == id);

            state.bookmakers[index].active = state.bookmakers[index].active ? 0 : 1;
        },

        REMOVE_LINk(state, [id, key]) {
            const index = state.bookmakers.findIndex(bookmaker => bookmaker.id == id);

            if (state.bookmakers[index].links) {
                delete state.bookmakers[index].links[key];
            }
        },

        ADD_LINK(state, [id, key, link]) {
            const index = state.bookmakers.findIndex(bookmaker => bookmaker.id == id);

            if ( !state.bookmakers[index].links ) {
                state.bookmakers[index].links = {};
            }

            state.bookmakers[index].links[key] = link;
        },

        FILTER_BY(state, value) {
            state.filterValue = value;

            switch(value) {
                case 'active':
                    state.filteredBookmakers = state.bookmakers.filter(bookmaker => bookmaker.active == 1);
                    break;

                case 'inactive':
                    state.filteredBookmakers = state.bookmakers.filter(bookmaker => bookmaker.active == 0);
                    break;

                case '':
                    state.filteredBookmakers = [...state.bookmakers];
                    break;

                default:
                    state.filteredBookmakers = state.bookmakers.filter(bookmaker => bookmaker.id == value);
            }
        },

        CHECK_ALL(state) {
            state.bookmakers.forEach(bookmaker => {
                bookmaker.active = 1;
            });
        },

        UNCHECK_ALL(state) {
            state.bookmakers.forEach(bookmaker => {
                bookmaker.active = 0;
            });
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
