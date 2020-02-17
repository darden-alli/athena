//Passing Array to Next Page & Clear Local
localStorage.clear();
var qn_arr = [];

function hidedisp(id) {
  //document.getElementById(id).style.visibility = "hidden";
  if (id == "1.1") {
    //Yes, I'm Safe
    card_police.style.display = "inherit";
    card_shelter.style.display = "none";
  	card_police.scrollIntoView(false);
  } else if (id == "1.2") {
  //Pass Shelter if not in pass array
  if (qn_arr.includes("Shelter") == false) {
    qn_arr.push("Shelter");
    console.log(qn_arr);
  }

  //I'm not safe
  card_police.style.display = "inherit";
  card_police.scrollIntoView(false);
  card_shelter.style.display = "none";

  } else if (id == "2.1" || id =="2.2") {
    alert("Do not throw away or clean any evidence. If possible, do not shower.");
    card_injury.style.display = "inherit";
    card_injury.scrollIntoView(false);
    card_police.style.display = "none";
    
    //Pass Police if not in pass array
    if (qn_arr.includes("Police") == false){
    qn_arr.push("Police");
    console.log(qn_arr);
    }
  } else if (id == "2.3") {
    //var gp = document.getElementById(id).parentNode.parentNode.id;
    //Yes but not now, No police
    
    //document.getElementById(gp).style.visibility = "hidden";
    card_injury.style.display = "inherit";
    card_injury.scrollIntoView(false);
    card_police.style.display = "none";
  
  } else if (id == "3.1") {
    card_university.style.display = "inherit";
    card_university.scrollIntoView(false);
    card_injury.style.display = "none";
    
    //Pass Medical if not in pass array
    if (qn_arr.includes("Medical") == false){
    qn_arr.push("Medical");
    qn_arr.push("Emergency");
    console.log(qn_arr);
    }
    
  } else if (id == "3.2" || id == "3.3") {
    //Not sure, No Medical Attention
    alert("Not all injuries are visible and it is still highly recommended to seek medical attention.");
    
    qn_arr.push("Medical");
    //var gp = document.getElementById(id).parentNode.parentNode.id;
    //document.getElementById(gp).style.visibility = "hidden";
    card_university.style.display = "inherit";
    card_university.scrollIntoView(false);
    card_injury.style.display = "none";
    
  } else if (id == "4.1") {
    card_hotline.style.display = "inherit";
    card_hotline.scrollIntoView(false);
    
    //Pass Confidential Advocate, Legal Advocate if not in pass array
    if (qn_arr.includes("Advocate") == false){
    qn_arr.push("Advocate");
    console.log(qn_arr);
    }
    
  } else if (id == "4.2" || id == "4.3") {
    card_hotline.style.display = "inherit";
    card_hotline.scrollIntoView(false);
    
    //Pass Confidential Advocate if not in pass array
    if (qn_arr.includes("Advocate") == false){
    qn_arr.push("Advocate");
    console.log(qn_arr);
    }
    
    
  } 
}

function goback(id) {
  //var prev = id - 1;
  var gp = document.getElementById(id).parentNode.parentNode.id;
  var prev_gp = document.getElementById(id).parentNode.parentNode.previousElementSibling.id;
  document.getElementById(gp).style.display = "none";
  document.getElementById(prev_gp).style.display = "inherit";
  document.getElementById(prev_gp).scrollIntoView(false);
}

function reset() {
  location.reload();
}

function navdisp(id) {
  if (id == "ShelterGo") {
    $(".qcard").hide();
    card_shelter.style.display = "inherit";
  } else if (id == "PoliceGo") {
    $(".qcard").hide();
    card_police.style.display = "inherit";
  } else if (id == "MedicalGo") {
    $(".qcard").hide();
    card_injury.style.display = "inherit";
  } else if (id == "UniversityGo") {
    $(".qcard").hide();
    card_university.style.display = "inherit";
  }
  
  }

function sendTo() {
//Pass QN Array
  localStorage.setItem("qn_arr", JSON.stringify(qn_arr));
  console.log(localStorage);
  window.location = "qn_report.html"; 
}
