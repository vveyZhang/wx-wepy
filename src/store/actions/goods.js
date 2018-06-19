import { FETCH_GOODS } from '../types/goods';
import { createAction } from 'redux-actions';
import { request } from '../../utils/request';
export const fetchGoods = createAction(FETCH_GOODS, params => {
  return request('/product/detail', params).then(data => {
    return {
      goods: data.product
    };
  });
});
