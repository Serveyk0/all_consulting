import { createStore } from 'redux';
//@ts-ignore
import reducer from './reducers/index.tsx';

const store = createStore(reducer);

export default store;
