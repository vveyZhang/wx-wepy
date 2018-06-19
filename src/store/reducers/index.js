import { combineReducers } from 'redux';
import shop from './shop';
import global from './global';
import goods from './goods';
import order from './order';
import crowd from './crowd';
import article from './article';
import carts from './carts';
export default combineReducers({
  global,
  shop,
  goods,
  order,
  crowd,
  article,
  carts
});
