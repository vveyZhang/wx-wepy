import { handleActions } from 'redux-actions';
import {
  FETCH_CROWD,
  FETCH_CROWD_DETAIL,
  FETCH_CROWD_ARGEE,
  SELECT_CROWD,
  FETCH_BENEFIT
} from '../types/crowd';

export default handleActions(
  {
    [FETCH_CROWD](state, { payload }) {
      return {
        ...state,
        ...payload,
        orderLoading: false
      };
    },
    [FETCH_CROWD_DETAIL](state, { payload }) {
      return {
        ...state,
        ...payload,
        detailLoading: false
      };
    },
    [FETCH_CROWD_ARGEE](state, { payload }) {
      return {
        ...state,
        crowd: {
          ...state.crowd,
          ...payload
        }
      };
    },
    [FETCH_BENEFIT](state, { payload }) {
      return {
        ...state,
        benefits: [...payload.benefits]
      };
    },
    [SELECT_CROWD](state, { payload }) {
      return {
        ...state,
        crowd: {
          ...state.crowd,
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
    benefits: [],
    crowd: {
      number: 1,
      price: 10000,
      status: false,
      agreement: [],
      a_address_id: null,
      crowdfunding_beneficiary_id: null
    }
  }
);
