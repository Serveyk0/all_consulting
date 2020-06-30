import React from "react";




export const check_title = ( search: string, title : string ): JSX.Element => 
{
    let original_str: Array<string> = title.toLowerCase().split(" ");
    let lower_title: string = title.toLowerCase().replace(/[,]/g, "");
    let lower_search: string = search.toLowerCase().replace(/[,]/g, "");
    const split_title: Array<string> = title.split(" ");
    const split_string = ( ): string | string[] => 
    {
        if ( lower_title !== lower_search )
            return (lower_title.replace(lower_search, "").split(" "));
        else
            return search
    }

    const check_first_letter = ( check_string : string ) => 
    {
        let split_check_string = check_string.replace(/\s/g, '');
        split_check_string = split_check_string.replace(/[,]/g, "");
        for ( let i: number = 0; i < split_title.length; i ++ )
        {  
            let check_index: string = split_title[i].toLowerCase( ) === split_check_string && (i + 1 === split_title.length) ? "" : " ";
            if ( split_title[i] === split_check_string )
                return split_check_string + check_index;
            if ( split_title[i].toLowerCase( ) === split_check_string && split_title[i] !== split_check_string)
                return split_check_string.charAt(0).toUpperCase()  + split_check_string.substr(1) + check_index;
            if ( i + 1 === split_title.length )
                return check_string
        }
    }

    let t: Array<string> | string  = split_string( );
    return (
    <div>
        {
            
            typeof t === "object" ? 
            
            t.map((item: string, index: number) => {
                console.log(index)
                return (
                    <React.Fragment key={index}>
                        {item === "" ? 
                        <span className="search_value">{(index > 0 ? " " : "") + check_first_letter(original_str[index])}</span> : " " +
                        check_first_letter(item)}
                    </React.Fragment>
                )
            })
        :
            <span className="search_value">{t}</span>
        }
    </div>
    )
}