import data from "./search_queries.json"
import React from "react";
import { Link } from "react-router-dom";
import "./search.sass";
import { connect } from "react-redux";
import { href_component } from "../menu/constant";

type props_type = 
{
    search: string
    set_search: Function
    set_search_val: Function
    changePg: Function
}

const SplitString = ( props: props_type ): JSX.Element => 
{
    const { search, set_search, set_search_val, changePg } = props;
    const without_double_spaces: string = search.replace(/\s+/g, ' ').trim();
    const src: Array<string> = without_double_spaces.toLowerCase().split(" ");
    let count_equals: number = 0;

    let result_array: JSX.Element | null = <>
    {
        data.map((item) => { return ( 
            item.queries.map((string_item: string, navlink_index: number) => { 
                count_equals = 0;
                
                const split_string: Array<string> = string_item.toLowerCase().split(" ");
                src.map((search_item: string) => { 
                    return ( 
                    split_string.map((split_string_item: string) => { return ( 
                        split_string_item === search_item ? 
                        count_equals++
                        : null
                    )})
                )})
                return ( count_equals === src.length ? 
                    //@ts-ignore 
                    <Link className="search_link" key={navlink_index} to={{pathname: item.href, propsSearch: without_double_spaces}} 
                    onClick={ () => {set_search(""); set_search_val("");
                    Object.values(href_component).map((ul_item, ul_index) => { 
                        return ( ul_item.name_href === "/" + item.href.split("/")[1] ) ?
                        ul_item.name_href === "/" ? changePg(-1) : changePg(ul_index) : null
                    })
                } } replace>{string_item}</Link>
                    : null
                )
            })
        )}) }</>
    return result_array;
}

export const Search = ( props: props_type ): JSX.Element => 
{
    const { search, set_search, set_search_val, changePg } = props;
    return (
        <div className={ "search" + ( search === "" ? " hide_block" : "" ) }>
        {
            search !== "" ?
            <SplitString search={search} set_search={set_search} set_search_val={set_search_val} changePg={changePg} />
            : ""
        }
        </div>
    )
}
const mapStateToProps = (state: any) => {
	return {
        changeSelector: state.changeSelector,
        changePage: state.changePage,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changePg: (pg: any) => {
            dispatch({ type: 'CHANGE_PAGE', page : pg });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);