import { combineReducers } from "redux";
import { changeSelector } from './selector';
import { changePage } from './page';
 
export default combineReducers ({
  changeSelector,
  changePage,
})