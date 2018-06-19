import {
  FETCH_CROWD,
  FETCH_CROWD_DETAIL,
  FETCH_CROWD_ARGEE,
  FETCH_BENEFIT
} from '../types/crowd';
import { createAction } from 'redux-actions';
import { request } from '../../utils/request';
export const fetchCrowd = createAction(FETCH_CROWD, params => {
  return request('/crowd-order/select', params).then(data => {
    return {
      orders: data.orders
    };
  });
});

export const fetchCrowdDetail = createAction(FETCH_CROWD_DETAIL, params => {
  return request('/order/detail', params).then(data => {
    return {
      order: data.order
    };
  });
});

export const fetchCrowdArgee = createAction(FETCH_CROWD_ARGEE, params => {
  return request('/article/protocol', params).then(data => {
    return {
      agreement: data.articles
    };
  });
});

export const fetchBenefit= createAction(FETCH_BENEFIT, params => {
  return request('/crowd-benefit/select', params).then(data => {
    return {
      benefits: data.benefits
    };
  });
});
