import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';

// Allow Vuex to somehow talk to Vue in general
// connect 2 library với nhau
Vue.use(Vuex); // like the initial handshake

// Nói cho Vuex biết những modules nào cần kết nối (hook up)
export default new Vuex.Store({
    modules: {
        auth,
        images
    }
});