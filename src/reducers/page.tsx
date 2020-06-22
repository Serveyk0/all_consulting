import { CHANGE_PAGE } from '../actionTypes';

const initialPageState = {
    page: -1
}

export const changePage = (state = initialPageState, action: any) => 
{
    if (action.type === CHANGE_PAGE) 
    {
        return {page: action.page}
    }
    return state;
}