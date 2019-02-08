import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store'; // ko cần './store/index' webpack tự kiếm index.js
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter); // thiết lập kết nối, handshake

// Liệt kê các route có trong app mình
export const router = new VueRouter({ // 'router' object được dùng để navigate user in our app
    mode: 'history', // cấu hình browser router (thay vì để mặc định là hash router)
    routes: [
        { path: '/oauth2/callback', component: AuthHandler },
        { path: '/', component: ImageList },
        { path: '/upload', component: UploadForm }
    ]
});

new Vue({
    // router: router ---ES6---> router
    router, // Vue Router instance
    store, // VueX instance
    render: h => h(App)
}).$mount('#app');