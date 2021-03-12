var donnee ;
var longitude ;
var latitude ;
var rayon ;
var callBackGetSuccess = function(data){

    donnee=data;

    if(document.getElementsByTagName("tbody")[0]){
        let d = document.getElementsByTagName("table")[0];
        let d_nested = document.getElementsByTagName("tbody")[0];
        d.removeChild(d_nested);
      }

        // get the reference for the table
        var tbl = document.getElementsByTagName("table")[0];
  
        // creates a <table> element and a <tbody> element
        var tblBody = document.createElement("tbody");
      
        // creating all cells
          
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            donnee.records.forEach(aux => {
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            var cellText = document.createTextNode(aux.fields.date);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement("td");
            var cellText = document.createTextNode(aux.fields.nom);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement("td");
            var cellText = document.createTextNode(aux.fields.nom_reg);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement("td");
            var cellText = document.createTextNode(aux.fields.nom_dept);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement("td");
            var cellText = document.createTextNode(aux.fields.t);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement("td");
            var cellText = document.createTextNode(aux.fields.dd);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement("td");
            var cellText = document.createTextNode(aux.fields.ff);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement("td");
            var cellText = document.createTextNode(aux.fields.u);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement("td");
            var cellText = document.createTextNode(aux.fields.etat_sol);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement("td");
            var cellText = document.createTextNode(aux.fields.ht_neige);
            cell.appendChild(cellText);
            row.appendChild(cell);          
            
            // add the row to the end of the table body
            tblBody.appendChild(row);

          });
          // put the <tbody> in the <table>
          tbl.appendChild(tblBody);

}

function buttonClickGET(){
    longitude = document.getElementById("longitude").value;
    latitude = document.getElementById("latitude").value;
    rayon = document.getElementById("rayon").value * 1000;

    var d1 = document.getElementById("date").value;
    var date_debut = new Date(d1);

    if(!rayon){
        rayon = 100000;
    }

    var date_fin = new Date(date_debut);
    date_fin.setDate(date_debut.getDate()+90);
    d2=date_fin.toISOString().split('T')[0];

    var url="https://data.opendatasoft.com/api/records/1.0/search/?dataset=donnees-synop-essentielles-omm%40public&q=date%3A%5B"+d1+"T23%3A00%3A00Z+TO+"+d2+"T22%3A59%3A59Z%5D"+"&rows=1000&sort=date&timezone=Europe%2FParis&geofilter.distance="+latitude+"%2C"+longitude+"%2C"+rayon

    $.get(url, callBackGetSuccess).done(function(){
    })
    .fail(function(){
        alert("error");
    })
    .always(function(){
    })
}

function  createCSV(){
    var CSVText="";

    if(longitude && latitude && rayon ){
    donnee.records.forEach(aux => {
        CSVText+=aux.fields.date+';'+aux.fields.nom+';'+aux.fields.nom_reg+';'+aux.fields.nom_dept+';'+aux.fields.t+';'+aux.fields.dd+';'+aux.fields.ff+';'+aux.fields.u+';'+aux.fields.etat_sol+';'+aux.fields.ht_neige+';'+"\n";
    });

    var a         = document.createElement('a');
    a.href        = 'data:attachment/csv,' + encodeURIComponent(CSVText);
           
    a.target      = '_blank';
    a.download    = 'Data_'+longitude+'_'+latitude+'_'+rayon/1000+'.csv';
    document.body.appendChild(a);
    a.click();
}
}

