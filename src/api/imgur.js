// File này như là helper
// Để phân tách code ra
// File này tập trung các logic về network request,...
// Sau đó sẽ đc import vô các modules trong /store (liên quan đến VueX) để dùng
import qs from 'qs';

const CLIENT_ID = '647d525a0b904e5';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    }
};