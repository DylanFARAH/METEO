<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="appMeteo.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/css/select2.min.css">

        <title>meteo</title>
    </head>
    <body style="display: inline;">
        <div>
                <div id="card" class="container mt-4" >
                    <h1>Météo</h1>                
                    <input id="longitude" type="number" placeholder="longitude" class="input_text" required="required">
                    <input id="latitude" type="number" placeholder="latitude" class="input_text" required="required">
                    <input id="rayon" type="number" placeholder="rayon (en Km)" class="input_text" required="required">
                    <input type="submit" value="Rechercher" class="btn btn-primary" onclick="buttonClickGET()"/>  
                    <input type="submit" class="btn btn-secondary" value="CSV" class="submit" onclick="createCSV()"/> 

                    <table class="table table-striped" style="margin-top:20px;">
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>nom</th>
                            <th>région</th>
                            <th>département</th>
                            <th>température</th>
                            <th>direction du vent</th>
                            <th>vitesse du vent</th>
                            <th>humidité</th>
                            <th>état du sol</th>
                            <th>hauteur d'un neige</th>
                        </tr>
                    </thead>
                </table>
                </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/js/select2.min.js"></script>
    </body>
</html>
