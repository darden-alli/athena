function get_array() {
    console.log(localStorage);
    let qn_get = localStorage.getItem("qn_out");
    //Rename to make sure we actually got passed variable
    console.log(qn_get);
    localStorage.clear();
    //Clear LS incase of revisit
  }