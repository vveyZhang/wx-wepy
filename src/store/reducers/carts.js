import { handleActions } from 'redux-actions';
import {
  GET_CARTS,
  DELETE_GOODS,
  SELECT_ALL,
  EDITOR_GOODS,
  SELECT_GOODS,
  HANDLE_EDITOR,
  ADD_GOODS
} from '../types/carts';
import { setStorage, getStorage, removeStorage } from '../../utils/storage';
export default handleActions(
  {
    [GET_CARTS](state, { payload }) {
      const carts = getStorage('carts');
      const select = [];
      for (let i = 0; i < carts.length; i++) {
        if (carts[i].select) select.push(i);
      }
      return {
        ...state,
        carts: carts,
        select: select
      };
    },
    [DELETE_GOODS](state, { payload }) {
      const carts = [];
      for (let item of carts) {
        if (!item.select) carts.push(item);
      }
      setStorage('carts', carts);
      return {
        ...state,
        carts,
        select: []
      };
    },
    [SELECT_ALL](state, { payload }) {
      let select = [];
      if (state.select.length < state.carts.length) {
        for (let item of state.carts) {
          item.select = true;
          select.push(state.carts.indexOf(item));
        }
      } else {
        for (let item of state.carts) {
          item.select = false;
        }
      }
      setStorage('carts', state.carts);
      return {
        ...state,
        select: select
      };
    },
    [SELECT_GOODS](state, { payload }) {
      const { index } = payload;
      if (state.carts[index].select) {
        state.carts[index].select = false;
        state.select.splice(index, 1);
      } else {
        state.carts[index].select = true;
        state.select.push(index);
      }
      setStorage('carts', state.carts);
      return {
        ...state
      };
    },
    [EDITOR_GOODS](state, { payload }) {
      const { index, count } = payload;
      state.carts[index].count = count;
      setStorage('carts', state.carts);
      return {
        ...state
      };
    },
    [HANDLE_EDITOR](state, { payload }) {
      const isEditor = !state.isEditor;
      return {
        ...state,
        isEditor
      };
    },
    [ADD_GOODS](state, { payload }) {
      const { goods } = payload;
      const carts = getStorage('carts');
      let index = -1;
      for (let item of carts) {
        if (item.id == goods.id) index = carts.indexOf(item);
      }
      if (index == -1) {
        carts.push({
          ...goods,
          count: 1,
          select: false
        });
      } else {
        carts[index].count += 1;
      }
      setStorage('carts', carts);
      return {
        ...state,
        carts
      };
    }
  },
  {
    carts: [],
    select: [],
    isEditor: false
  }
);
