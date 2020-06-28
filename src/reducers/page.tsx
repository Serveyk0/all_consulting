import { CHANGE_PAGE } from '../actionTypes';

const initialPageState = {
    page: -1
}

type actionProps = 
{
    type: string,
    page: number
}

export const changePage = (state = initialPageState, action: actionProps) => 
{
    if (action.type === CHANGE_PAGE) 
    {
        return {page: action.page}
    }
    return state;
}