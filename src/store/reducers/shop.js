import { handleActions } from 'redux-actions'
import { FETCH_PRODUCT, CHANGE_STATUS } from '../types/shop'

export default handleActions({
    [FETCH_PRODUCT](state, { payload }) {
        let category = ['全部', "新品"];
        for (let item of payload.products) {
            if (category.indexOf(item.category_name) == -1) {
                category.push(item.category_name)
            }
        }
        return {
            ...state,
            ...payload,
            category
        }
    },
    [CHANGE_STATUS](state, { payload }) {
        return { ...state, status: payload }
    }
}, {
        products: [],
        count: 0,
        category: ['全部', '新品'],
        status: "全部"
    })