import data from "./search_queries.json"
export const search = ( ) => 
{
    data.map((item, index) => { 
        Object.values(item).map((item2, index2) => { 
            //@ts-ignore
            item2.queries.map((item3, index3) => { return (
                //@ts-ignore
                console.log(item2[0])
            )})
        })
    })
}