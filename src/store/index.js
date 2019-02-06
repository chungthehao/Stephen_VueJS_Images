import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

// Allow Vuex to somehow talk to Vue in general
// connect 2 library với nhau
Vue.use(Vuex); // like the initial handshake

export default new Vuex.Store({
    modules: {
        auth
    }
});