import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Select2 from 'v-select2-component';

Vue.component('Select2', Select2);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
