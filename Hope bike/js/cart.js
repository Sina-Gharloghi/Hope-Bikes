$(document).ready(function()
{
    $("#pay").mouseenter(function()
    {
        $(this).css("background-color" , 'rgba(82, 158, 0, 0.829)');
    });

    $("#pay").mouseleave(function()
    {
        $(this).css("background-color" , 'rgba(73, 141, 1, 0.794)');
    });
})