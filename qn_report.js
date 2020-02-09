function get_array() {
    console.log(localStorage);
    var qn_get = localStorage.getItem("qn_arr");
    //Rename to make sure we actually got passed variable
    console.log(qn_get);
    //localStorage.clear();
    //Clear LS incase of revisit
  }

function iterate() {
    qn_get = JSON.parse(localStorage.getItem("qn_arr"));
    for (var c in qn_get) {
        //console.log(qn_get[c]);
        var x = document.getElementById(qn_get[c]);
        console.log(x);
        //x.display = "block";
        x.style.display = "block";
        
    }
}