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
    }
};