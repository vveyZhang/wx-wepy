import { FETCH_ORDERS, FETCH_DETAIL, CREATE_ORDER } from '../types/order';
import { createAction } from 'redux-actions';
import { request } from '../../utils/request';
export const fetchOrders = createAction(FETCH_ORDERS, params => {
  return request('/order/select', params).then(data => {
    return {
      orders: data.orders
    };
  });
});

export const fetchDetail = createAction(FETCH_DETAIL, params => {
  return request('/order/detail', params).then(data => {
    return {
      order: data.order
    };
  });
});

export const createOrder = createAction(CREATE_ORDER, params => {
  return request('/order/create', params).then(data => {
    return {
      order: data.order
    };
  });
});
