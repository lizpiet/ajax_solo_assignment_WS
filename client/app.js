$(function(){

    $.ajax({
        url:"/colors"

    }).done(function(response){
        console.log("called ajax");
        console.log(response);
        for (var it = 0; it< response.length; it++){
            console.log(response[it]);
            var $content = $("<div style='background-color: " + response[it].value +" '><p>Color " + it + " "
                + response[it].color + " " + "</p></div>");
            console.log($content);

            $(".content-placeholder").append($content);
        }
    }).fail(function(response){
        console.log("failed:" + response);
    });
});