var callBackGetSuccess = function(data){
    console.log("donnees api",data)

}

function buttonClickGET(){
    var url=""

    $.get(url, callBackGetSuccess).done(function(){
    })
    .fail(function(){
        alert("error");
    })
    .always(function(){
    });
}