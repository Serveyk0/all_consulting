import React from 'react';
import { selection_array, select_object } from "./constant";
import { connect } from 'react-redux';

// import "./selector.sass";
import { Form } from './form/form';
//@ts-ignore
const Selector = ( props ) =>  
{
    const { cs } = props.changeSelector;
    const { changeSel } = props;

    const handle_change = ( index ) => 
        changeSel(index);

    return (
        <div className="selector">
            <div className="selector_change_items">
                {selection_array.map((item, index) => { return ( 
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

//@ts-ignore
const mapStateToProps = (state) => {
	return {
        changeSelector: state.changeSelector
    }
};
//@ts-ignore
const mapDispatchToProps = (dispatch) => {
    return {
        //@ts-ignore
        changeSel: (cs) => {
            dispatch({ type: 'CHANGE_SELECTOR', cs : cs });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);