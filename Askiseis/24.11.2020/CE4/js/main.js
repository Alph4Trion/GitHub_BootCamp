$( document ).ready(function(){
    $(".hide-button").on("click", function(){
        $("img").hide();
    });

    $(".show-button").on("click" ,function(){
        $("img").show();
    });

    $(".hide-button").hover(function(){
        $(this).css({
            "background-color":"coral"
        });
    },
    function(){
        $(this).css({
            "background-color":"green"
        })
    });

});