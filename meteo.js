var callBackGetSuccess = function(data){
    console.log("donnees api",data)

}

function buttonClickGET(){
    var url="https://data.opendatasoft.com/api/records/1.0/search/?dataset=observation-meteorologique-historiques-france-synop%40grandparissud&q=&sort=date&facet=date&facet=nom&facet=temps_present&facet=libgeo&facet=nom_epci&facet=nom_dept&facet=nom_reg&timezone=Europe%2FParis"

    $.get(url, callBackGetSuccess).done(function(){
    })
    .fail(function(){
        alert("error");
    })
    .always(function(){
    });
}
