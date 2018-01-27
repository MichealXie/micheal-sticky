import Vue from 'vue'
import axios from 'axios'
import router from './router/router'
import App from './App.vue'

Vue.prototype.$http = axios

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
