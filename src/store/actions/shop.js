import { FETCH_PRODUCT } from '../types/shop'
import { createAction } from 'redux-actions'
import { request } from '../../utils/request'
import wepy from 'wepy';
export const fetchProduct = createAction(FETCH_PRODUCT, (params) => {
    wepy.stopPullDownRefresh();
    return request('/product/select').then(data => {
        return {
            products: data.products
        };
    })
})