import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

// Khi actions được gọi ở đâu (update states), thì bất cứ component nào có dùng getters (cùng module)
// sẽ được re-render
const actions = {
    login: () => {
        api.login();
    },
    // 'commit' là 1 func đặc biệt dùng để gọi mutation
    finalizeLogin({ commit }, hash) {
        const queryObj = qs.parse(hash.replace('#', ''));

        commit('setToken', queryObj.access_token); // update state of 'auth' module (this case: token)

        window.localStorage.setItem('imgur_token', queryObj.access_token);

        // - Không dùng window.location = <<url>> vì sẽ reload lại trang ---> dùng Vue Router (biến 'router' ở dưới là obj đặc biệt được import vô từ main.js)
        router.push('/');
    },
    logout: ({ commit }) => {
        commit('setToken', null);

        window.localStorage.removeItem('imgur_token'); 
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};