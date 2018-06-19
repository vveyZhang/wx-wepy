import { handleActions } from 'redux-actions';
import {
  USER_LOGIN,
  FETCH_BANNER,
  FETCH_ADDRESS,
  CREATE_ADDRESS,
  UPDATE_ADDRESS
} from '../types/global';
import { successToast } from '../../utils/toast';
import wepy from 'wepy';
export default handleActions(
  {
    [USER_LOGIN](state, { payload }) {
      return {
        ...state,
        user: { ...payload.user },
        isLogin: true
      };
    },
    [FETCH_BANNER](state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    [FETCH_ADDRESS](state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    [CREATE_ADDRESS](state, { payload }) {
      const { error } = payload;
      if (error.error_code != 0) return;
      successToast('添加成功');
      wepy.navigateBack();
      return {...state}
    },
    [UPDATE_ADDRESS](state, { payload }) {
      const { error } = payload;
      if (error.error_code != 0) return;
      successToast('修改成功');
      wepy.navigateBack();
      return {...state}
    }
  },
  {
    user: {},
    address: [],
    banners: [],
    isLogin: false
  }
);
