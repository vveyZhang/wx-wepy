import { handleActions } from 'redux-actions';
import {
  FETCH_ORDERS,
  FETCH_DETAIL,
  CHANGE_ORDER_ADDRESS,
  CHANGE_ORDER_GOODS,
  CREATE_ORDER_GOODS,
  CREATE_ORDER
} from '../types/order';

export default handleActions(
  {
    [FETCH_ORDERS](state, { payload }) {
      return {
        ...state,
        ...payload,
        orderLoading: false
      };
    },
    [FETCH_DETAIL](state, { payload }) {
      return {
        ...state,
        ...payload,
        detailLoading: false
      };
    },
    [CREATE_ORDER](state, { payload }) {
      return {
        ...state,
        create: {
          ...state.create,
          order: { ...payload.order }
        }
      };
    },
    [CHANGE_ORDER_GOODS](state, { payload }) {
      const { index, count } = payload;
      console.log(index, count )
      const goods = state.create.goods;
      goods[index].count = count;
      return {
        ...state,
        create: {
          ...state.create,
          goods: [...goods]
        }
      };
    },
    [CREATE_ORDER_GOODS](state, { payload }) {
      return {
        ...state,
        create: {
          ...state.create,
          goods: [...payload.goods]
        }
      };
    },
    [CHANGE_ORDER_ADDRESS](state, { payload }) {
      return {
        ...state,
        create: {
          ...state.create,
          ...payload
        }
      };
    }
  },
  {
    orders: {},
    order: {},
    orderLoading: true,
    detailLoading: true,
    create: {
      address_id: null,
      goods: [],
      order: {}
    }
  }
);
