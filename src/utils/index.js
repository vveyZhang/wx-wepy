import store from '../store';
import { login } from './request.js';
import { USER_LOGIN } from '../store/types';
import { fetchAddress } from '../store/actions';
import 'wepy-async-function';
import wepy from 'wepy';
export async function init(callback) {
  if (callback) {
    if (wepy.getStorageSync('sessionid')) {
      callback();
      return;
    }
  }
  const data = await wepy.login();
  const user = await login({ js_code: data.code });
  store.dispatch({
    type: USER_LOGIN,
    payload: {
      user: user.user
    }
  });
  if (!user.user.mobile) {
    wepy.navigateTo({
      url: '/pages/mine/bang'
    });
  }

  wepy.setStorageSync('user', user.user);
  store.dispatch(fetchAddress());
  if (callback) callback();
}
