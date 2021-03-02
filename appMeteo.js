var callBackGetSuccess = function(data){

    var donnee=data;

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
    var longitude = document.getElementById("longitude").value;
    var latitude = document.getElementById("latitude").value;
    var rayon = document.getElementById("rayon").value * 1000;

    var url="https://data.opendatasoft.com/api/records/1.0/search/?dataset=donnees-synop-essentielles-omm%40public&rows=100&sort=date&timezone=Europe%2FParis&geofilter.distance="+latitude+"%2C"+longitude+"%2C"+rayon

    $.get(url, callBackGetSuccess).done(function(){
    })
    .fail(function(){
        alert("error");
    })
    .always(function(){
    })
}

