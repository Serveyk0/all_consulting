import { CHANGE_SELECTOR } from '../actionTypes';

const initialSelectorState = {
    cs: 0
}


export const changeSelector = (state = initialSelectorState, action: any) => 
{
    if (action.type === CHANGE_SELECTOR) 
    {
        return {cs: action.cs}
    }
    return state;
}