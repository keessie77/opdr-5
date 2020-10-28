var knoppen = ["knop a", "knop b", "knop c","knop d"]
        var tellen = [0,0,0,0]
        function klik(knopp){
            tellen[knopp]++;
            var zin = "U heeft" + tellen[knopp] + " keer op" + knoppen[knopp] + " gedrukt";
            console.log (tellen);
            var appenddata = document.getElementById("box");
            if (tellen[knopp] > 1){
                alert (zin);
                appenddata.insertAdjacentHTML('beforeend', '<p>' + "U heeft op " + knoppen[knopp] + " gedrukt" + '</p>');
            } 
                else {
                    appenddata.insertAdjacentHTML('beforeend', '<p>' + "U heeft op " + knoppen[knopp] + " gedrukt" + '</p>');

                }
        }   