function generate_report(){
    qn_get = JSON.parse(localStorage.getItem("qn_arr"));
    for (var c in qn_get) {
        //console.log(qn_get[c]);
        var x = document.getElementById(qn_get[c]);
        console.log(x);
        //x.display = "block";
        x.style.display = "flex";
        
    }
}