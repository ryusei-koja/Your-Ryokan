/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue');

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue' 
import router from './router' 
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)
Vue.use(Vuetify);
// Vue.use(VueRouter);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


//旅館ページ(RyokanPage)で使う部品
// Vue.component('RyokanItem', require('./components/Ryokan/RyokanItem.vue').default);
Vue.component('RyokanForm', require('./components/Ryokan/RyokanForm.vue').default);
Vue.component('RyokanList', require('./components/Kanri/RyokanList.vue').default);
Vue.component('RyokanAdd', require('./components/Kanri/RyokanAdd.vue').default);


Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('top-detail', require('./components/topPage/topDetail.vue').default);
Vue.component('ryokan-detail', require('./components/topPage/topRyokan.vue').default);
Vue.component('event-detail', require('./components/topPage/topEvent.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router,
});


