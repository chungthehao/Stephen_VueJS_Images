const state = {
    images: [] // sẽ là nơi chứa 1 mảng các image object lấy từ imgur về
};

const getters = {
    allImages: state => state.images
};

// 'actions' sẽ tổ hợp, thêm thắt, dùng nhiều (có thể ko dùng) mutations ---> để giải quyết những logic phức tạp
const actions = {
    fetchImages() {

    }
};

// 'mutations' chỉ chứa những business logic đơn giản, straightforward
const mutations = {
    setImages: (state, images) => { // images sẽ là 1 mảng các obj, fetch đc từ imgur API
        state.images = images;
    }
};