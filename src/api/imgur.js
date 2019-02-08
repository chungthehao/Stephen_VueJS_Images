// File này như là helper
// Để phân tách code ra
// File này tập trung các logic về network request,...
// Sau đó sẽ đc import vô các modules trong /store (liên quan đến VueX) để dùng
import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '647d525a0b904e5';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        // Đẩy người dùng đi login (bằng API của Imgur, OAuth2 flow)
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },

    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },

    uploadImages(images, token) {
        // # Chuyển file list obj (half an array) ---> a real array
        // dùng Array.from(images) 
        const promises = Array.from(images).map(image => {
            // # Để giải quyết vấn đề, truy xuất được file trên ổ cứng
            const formData = new FormData(); // vanilla js

            // Dùng key là 'image', vì doc API imgur cần key 'image'
            formData.append('image', image); // this line of code right here is what's gonna take that file reference and actually retrieve the file and attach it to the request that we're about to make

            // # POST request to the imgur API, take that formData obj and send off the entire image
            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); // return request obj

            // # NOTE: Mặc dù, là lặp từng image ra rồi upload,
            // nhưng ko có nghĩa là upload từng file, mà sẽ upload đồng loạt (at the exact same time [lúc upload coi chỗ XHR sẽ thấy datetime chệch nhau có 1, 2ms thôi, code chạy lẹ, upload lên internet cần thời gian])
            // ---> Mình phải đảm bảo hàm upload return exactly one promise that represents all of these separate image requests (all these separate uploads)
        });

        // # Cái này để: To wait for this entire array of promises to be resolved
        // (To make sure that we wait for every upload request be completed before we allow this function to continue)
        return Promise.all(promises);
    }
};