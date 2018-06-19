import { handleActions } from 'redux-actions'
import { FETCH_GOODS } from '../types/goods'

export default handleActions({
    [FETCH_GOODS](state, { payload }) {
        console.log(payload)
        return {
            ...state,
            ...payload,
            loading:false
        }
    }
}, {
        goods: {},
        loading: true
    })