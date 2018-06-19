import { handleActions } from 'redux-actions';
import {
  FETCH_NEWS,
  FETCH_ARTICLES,
  ARTICLES_LOADING,
  FETCH_NEWS_DETAIL,
  NEWS_LOADING
} from '../types/article';

export default handleActions(
  {
    [FETCH_NEWS](state, { payload }) {
      return {
        ...state,
        news: {
          ...state.news,
          loading: false,
          ...payload,
          list: [...state.news.list, ...payload.list]
        }
      };
    },
    [FETCH_NEWS_DETAIL](state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    [FETCH_ARTICLES](state, { payload }) {
      return {
        ...state,
        articles: {
          ...state.articles,
          ...payload,
          loading: false,
          list: [...state.articles.list, ...payload.list]
        }
      };
    },
    [NEWS_LOADING](state, { payload }) {
      return {
        ...state,
        news: {
          ...state.news,
          loading: true
        }
      };
    },
    [ARTICLES_LOADING](state, { payload }) {
      return {
        ...state,
        articles: {
          ...state.articles,
          loading: true
        }
      };
    }
  },
  {
    news: {
      list: [],
      loading: false,
      count: 0,
      page: 1
    },
    newsDetail: {},
    articles: {
      list: [],
      loading: false,
      count: 0,
      page: 1
    }
  }
);
