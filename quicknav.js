function hidedisp(id) {
  //document.getElementById(id).style.visibility = "hidden";
  if (id == "1.1") {
    alert("Call the police and get medical care.");
    //Yes police
  } else if (id == "1.2" || id == "1.3") {
    var gp = document.getElementById(id).parentNode.parentNode.id;

    //No police
    document.getElementById(gp).style.visibility = "hidden";
    card_injury.style.visibility = "visible";
  } else if (id == "2.1" || id == "2.2") {
    var gp = document.getElementById(id).parentNode.parentNode.id;
    //Yes injured
    document.getElementById(gp).style.visibility = "hidden";
    card_shelter.style.visibility = "visible";
  } else if (id == "2.3") {
    var gp = document.getElementById(id).parentNode.parentNode.id;
    //No injury
    alert("It's still recommended to get a medical appointment, even if you are uninjured.")
    document.getElementById(gp).style.visibility = "hidden";
    card_legal.style.visibility = "visible";
  } else if (id == "3.1") {
    //Yes shelter
    alert("Shelter contact & medical services");
  } else if (id == "3.2") {
    //Yes shelter
    alert("UVA Medical services");
  } else if (id == "4.1" || id == "4.2") {
    //Yes lawyer
    alert("Lawyer Up!");
  } else if (id == "4.3") {
    var gp = document.getElementById(id).parentNode.parentNode.id;
    //No lawyer
    document.getElementById(gp).style.visibility = "hidden";
    card_university.style.visibility = "visible";
  } else if (id == "5.1") {
    //Yes university
    alert("Dean of Students");
  } else if (id == "5.2" || id == "5.3") {
    //Yes university
    alert("Confidential Advocate");
  }
}

//Not all backs work the way we want
function goback(id) {
  //var prev = id - 1;
  var gp = document.getElementById(id).parentNode.parentNode.id;
  var prev_gp = document.getElementById(id).parentNode.parentNode.previousElementSibling.id;
  document.getElementById(gp).style.visibility = "hidden"
  document.getElementById(prev_gp).style.visibility = "visible"
}

function reset() {
  location.reload();
}
