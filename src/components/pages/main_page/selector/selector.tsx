import React from 'react';
import { selection_array, select_object, title_span, other_span, about_us_p } from "./constant";
import { connect } from 'react-redux';

import "./selector.sass";
import { Form } from './form/form';

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
                    <>
                        <div>
                            <span className="description active_description color_description" >{title_span}</span>
                            <span>{other_span}</span>
                        </div>
                        {about_us_p.map((p_item: string, p_index: number) => { return ( 
                            <p key={p_index}>{p_item}</p>
                        )})}
                    </>
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