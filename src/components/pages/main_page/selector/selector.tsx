import React from 'react';
//@ts-ignore
import { selection_array, select_object } from "./constant.ts";
import { connect } from 'react-redux';

import "./selector.sass";
//@ts-ignore
import { Form } from './form/form.tsx';

const Selector = ( props: any ) =>  
{
    const { cs } = props.changeSelector;
    const { changeSel } = props;

    const handle_change = ( index: number ) => 
        changeSel(index);

    return (
        <div className="selector">
            <div className="selector_change_items">
                {selection_array.map((item: select_object, index: number) => { return ( 
                    <span key={index} className={"item" + (cs === index ? " active_item" : "")} onClick={ () => handle_change(index) }>{item.item}</span>
                )})}     
            </div>
            <div className="selector_description_items">
                {
                    selection_array[cs].description === "" ? <Form /> :
                    <span className="description active_description" >{selection_array[cs].description}</span>
                }   
            </div>
        </div>
    )
}


const mapStateToProps = (state: any) => {
	return {
        changeSelector: state.changeSelector
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeSel: (cs: any) => {
            dispatch({ type: 'CHANGE_SELECTOR', cs : cs });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);