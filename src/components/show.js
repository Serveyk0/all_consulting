export let show = function( )
{
    if (document.readyState === "complete") 
        show_method ( );
    else
        document.body.onload = function() { show_method() };
}

let show_method = function () 
{
    let foo = document.getElementById("main_menu");
    console.log(window.location.href.split("/")[4])
    if(window.location.href.split("/")[4] !== "")
    {
        foo.classList.remove('hide_menu');
        foo.classList.add('show_menu');
    }
    else
    {
        foo.classList.remove('show_menu');
        foo.classList.add('hide_menu');
    }
}