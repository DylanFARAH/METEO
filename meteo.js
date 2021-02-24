var callBackGetSuccess = function(data){
    console.log("donnees meteo",data)
    //alert("la temperature est de:" + data.records[0].fields.tc)
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temeprature est de " +data.records[0].fields.tc;
}

function buttonClickGET(){
    var url="https://data.opendatasoft.com/api/records/1.0/search/?dataset=observation-meteorologique-historiques-france-synop%40grandparissud&q=&sort=date&facet=date&facet=nom&facet=temps_present&facet=libgeo&facet=nom_epci&facet=nom_dept&facet=nom_reg&timezone=Europe%2FParis"

    $.get(url, callBackGetSuccess).done(function(){
    })
    .fail(function(){
        alert("error");
    })
    .always(function(){
<<<<<<< HEAD
    })
}
=======
    });
}
>>>>>>> 6ff074f10d6d7c852154a8b7a064e955f18e2290
