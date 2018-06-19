import {
  FETCH_NEWS,
  FETCH_ARTICLES,
  ARTICLES_LOADING,
  NEWS_LOADING,
  FETCH_NEWS_DETAIL
} from '../types/article';
import { createAction } from 'redux-actions';
import { request } from '../../utils/request';
import store from '../index';
export const fetchNews = createAction(FETCH_NEWS, params => {
  store.dispatch({
    type: NEWS_LOADING
  });
  return request('/news/select', { ...params, limit: 10 }).then(data => {
    console.log(data);
    return {
      list: data.news,
      count: data.count,
      ...params
    };
  });
});

export const fetchArticles = createAction(FETCH_ARTICLES, params => {
  store.dispatch({
    type: ARTICLES_LOADING
  });
  return request('/article/select', { ...params, limit: 10 }).then(data => {
    return {
      list: data.articles,
      count: data.count,
      ...params
    };
  });
});

// export const fetchNewsDetail = createAction(FETCH_NEWS_DETAIL, params => {
//   return request('/news/detail', { ...params }).then(data => {
//     return {
//       newsDetail: data.news
//     };
//   });
// });
