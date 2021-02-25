var callBackGetSuccess = function(data){
    console.log("donnees meteo",data)
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature est de " +data.records[0].fields.tc;
    var element = document.getElementById("vent");
    element.innerHTML = "La vitesse du vent est de " +data.records[0].fields.vv;
}

function buttonClickGET(){
    document.getElementById("card").style.display = "block";

    var url="https://data.opendatasoft.com/api/records/1.0/search/?dataset=observation-meteorologique-historiques-france-synop%40grandparissud&q=&sort=date&timezone=Europe%2FParis&rows=99"

    $.get(url, callBackGetSuccess).done(function(){
    })
    .fail(function(){
        alert("error");
    })
    .always(function(){
    })
}
