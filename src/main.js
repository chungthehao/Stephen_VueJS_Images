import Vue from 'vue';
import App from './App';
import store from './store'; // ko cần './store/index' webpack tự kiếm index.js

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');