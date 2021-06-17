//Check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to Delete a Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropogation();
});

//Adding a Todo From the Input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val = "";
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
    }
})