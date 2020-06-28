import { CHANGE_SELECTOR } from '../actionTypes';

const initialSelectorState = {
    cs: 0
};

type actionProps = {
    type: string,
    cs: number,
}


export const changeSelector = (state = initialSelectorState, action: actionProps) => 
{
    console.log(typeof action)
    if (action.type === CHANGE_SELECTOR) 
    {
        return {cs: action.cs}
    }
    return state;
}