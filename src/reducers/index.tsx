import { combineReducers } from "redux";
//@ts-ignore
import { changeSelector } from './selector.tsx';
//@ts-ignore
import { changePage } from './page.tsx';
 
export default combineReducers ({
  changeSelector,
  changePage,
})