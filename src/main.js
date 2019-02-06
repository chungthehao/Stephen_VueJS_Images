import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store'; // ko cần './store/index' webpack tự kiếm index.js
import AuthHandler from './components/AuthHandler';

Vue.use(VueRouter); // thiết lập kết nối, handshake

// Liệt kê các route có trong app mình
const router = new VueRouter({
    routes: [
        { path: '/oauth2/callback', component: AuthHandler }
    ]
});

new Vue({
    // router: router ---ES6---> router
    router, // Vue Router instance
    store, // VueX instance
    render: h => h(App)
}).$mount('#app');