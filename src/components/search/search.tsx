import data from "./search_queries.json"
import React from "react";

export const Search = ( ) => 
{
    return (
        data.map((item, index) => { 
            item.queries.map((item2, index2) => { 
                <div>{item2 + item.href}</div>;
            })
        })
    )
}