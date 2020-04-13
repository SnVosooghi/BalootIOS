import {get_token} from '../../../actions';
const API_URL = 'https://clone.classino.com/api/';

function fetchToken(mobile,password) {
    return dispatch => {
        fetch('https://clone.classino.com/api/login',{
          method:'POST',
          body: JSON.stringify({
            mobile:mobile,
            password:password,
            }),
          })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(get_token(res.token));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchToken;
