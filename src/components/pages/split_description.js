export const split_description = ( description ) => 
{
    const desk = description.replace(/[/.,!?;]*/g, '').split(" ");
    let keywords = "";
    for ( let i = 0; i < desk.length; i ++ )
        keywords += desk[i] + ", "
    return keywords;
}