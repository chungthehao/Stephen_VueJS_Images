import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: [] // sẽ là nơi chứa 1 mảng các image object lấy từ imgur về
};

// - Sẽ được dùng như 'computed properties' ở vue component
const getters = {
    allImages: state => state.images
};

// - 'actions' sẽ tổ hợp, thêm thắt, dùng nhiều (có thể ko dùng) mutations ---> để giải quyết những logic phức tạp
// - Sẽ được dùng như 'methods' ở vue component
const actions = {
    // 'rootState' is a reference to all of the state that is held inside of our 'Vuex Store' (aka Vuex instance)
    async fetchImages({ rootState, commit }) {
        // - Gọi rootState.auth đc vì ở file index.js đã:
        // export default new Vuex.Store({
        //     modules: {
        //         auth
        //     }
        // });
        const { token } = rootState.auth;

        // Dùng async/await ở đây thay vì promise vì tuân theo convention của vuex...
        const response = await api.fetchImages(token); // 'response' chứa 1 mảng các image object được lấy về
        // console.log(response)

        // - 'commit' là hàm gọi mutation
        // - 1st argument là string, tên mutation muốn gọi
        // - 2nd argument là param thứ 2 của mutation đó cần nhận
        commit('setImages', response.data.data); // 1st 'data' property là của axios, 2nd 'data' property là từ imgur API
    },

    async uploadImages({ rootState }, images) {
        // # Dựa vào document API của imgur, có các việc sau phải làm:
        // - Get the access token
        const { token } = rootState.auth;

        // - Call our imgur API module (/src/api/imgur.js) to do the upload
        await api.uploadImages(images, token);

        // Redirect our user to ImageList component
        router.push('/');
    }
};

// 'mutations' chỉ chứa những business logic đơn giản, straightforward, để update 'state' của module
const mutations = {
    setImages: (state, images) => { // images sẽ là 1 mảng các obj, fetch đc từ imgur API
        state.images = images;
    }
};

// Tên các properties RẤT QUAN TRỌNG!!! (ko đc khác)
export default {
    state,
    getters,
    actions,
    mutations
};