import Vue from 'vue';
import App from './App.vue';
import store from './store';
import config from './config';
import Select2 from 'v-select2-component';
import firebase from 'firebase/app';

firebase.initializeApp(config);

Vue.component('Select2', Select2);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
