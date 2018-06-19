import {
  FETCH_ADDRESS,
  FETCH_BANNER,
  CREATE_ADDRESS,
  UPDATE_ADDRESS
} from '../types/global';
import { createAction } from 'redux-actions';
import { request } from '../../utils/request';
import wepy from 'wepy';
export const fetchAddress = createAction(FETCH_ADDRESS, params => {
  return request('/address/select', params).then(data => {
    return {
      address: data.address
    };
  });
});

export const fetchBanner = createAction(FETCH_BANNER, params => {
  return request('/article/carousel', params).then(data => {
    wepy.stopPullDownRefresh();
    return {
      banners: data.articles
    };
  });
});

export const crateAddress = createAction(CREATE_ADDRESS, params => {
  return request('/address/create', params).then(data => {
  
    return { ...data };
  });
});

export const updateAddress = createAction(UPDATE_ADDRESS, params => {
  return request('/address/update', params).then(data => {
    return { ...data };
  });
});
