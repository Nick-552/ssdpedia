document.addEventListener("DOMContentLoaded", () => {
    $(".fa-solid.fa-circle-chevron-down").click(function(){
        $(this).parent().siblings().toggle();
    });
    $(".fa-solid.fa-circle-chevron-down").click(function(){
        $(this).toggleClass("rotate");
    });
});