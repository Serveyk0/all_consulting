import React from "react";




export const check_title = ( search: string, title : string ): JSX.Element => 
{
    let lower_title: string = title.toLowerCase();
    let lower_search: string = search.toLowerCase();

    const split_string = ( ): string | string[] => 
    {
        if ( lower_title !== lower_search )
            return (lower_title.split(lower_search));
        else
            return search
    }

    const check_first_letter = ( check_string : string ) => 
    {
        const split_title: Array<string> = title.split(" ");
        check_string = check_string.replace(/\s/g, '')
        for ( let i: number = 0; i < split_title.length; i ++ )
        {
            if ( split_title[i].toLowerCase( ) === check_string && split_title[i] !== check_string)
                return check_string.charAt(0).toUpperCase()  + check_string.substr(1);
            else
                return check_string;
        }
    }

    let t: Array<string> | string  = split_string( );
    return (
    <div>
        {
            typeof t === "object" ? 
            t.map((item: string, index: number) => { 
                return (
                    <React.Fragment key={index}>
                        {item === "" ? 
                        <span className="search_value">{(index > 0 ? " " : "") + check_first_letter(lower_search)}</span> :
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