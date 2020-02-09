//Passing Array to Next Page & Clear Local
var qn_arr = [];
localStorage.clear();

function hidedisp(id) {
  //document.getElementById(id).style.visibility = "hidden";
  if (id == "1.1") {
    //Yes, I'm Safe
    card_police.style.visibility = "visible";
  	card_police.scrollIntoView(false);
  } else if (id == "1.2") {
  //Pass Shelter if not in pass array
  if (qn_arr.includes("Shelter") == false) {
    qn_arr.push("Shelter");
    console.log(qn_arr);
  }

  //I'm not safe
  card_police.style.visibility = "visible";
  card_police.scrollIntoView(false);

  } else if (id == "2.1" || id =="2.2") {
    alert("Call the police and get medical care. Do not throw away or clean any evidence.");
    card_injury.style.visibility = "visible";
    card_injury.scrollIntoView(false);
    
    //Pass Police if not in pass array
    if (qn_arr.includes("Police") == false){
    qn_arr.push("Police");
    console.log(qn_arr);
    }
  } else if (id == "2.3") {
    //var gp = document.getElementById(id).parentNode.parentNode.id;
    //Yes but not now, No police
    
    //document.getElementById(gp).style.visibility = "hidden";
    card_injury.style.visibility = "visible";
    card_injury.scrollIntoView(false);
  
  } else if (id == "3.1") {
    card_university.style.visibility = "visible";
    card_university.scrollIntoView(false);
    
    //Pass Medical if not in pass array
    if (qn_arr.includes("Medical") == false){
    qn_arr.push("Medical");
    console.log(qn_arr);
    }
    
  } else if (id == "3.2" || id == "3.3") {
    //Not sure, No Medical Attention
    alert("Not all injuries are visible and you should still seek medical attention.");

    //var gp = document.getElementById(id).parentNode.parentNode.id;
    //document.getElementById(gp).style.visibility = "hidden";
    card_university.style.visibility = "visible";
    card_university.scrollIntoView(false);
    
  } else if (id == "4.1") {
    card_hotline.style.visibility = "visible";
    card_hotline.scrollIntoView(false);
    
    //Pass Confidential Advocate, Legal Advocate if not in pass array
    if (qn_arr.includes("Advocate") == false){
    qn_arr.push("Advocate");
    console.log(qn_arr);
    }
    
  } else if (id == "4.2" || id == "4.3") {
    card_hotline.style.visibility = "visible";
    card_hotline.scrollIntoView(false);
    
    //Pass Confidential Advocate if not in pass array
    if (qn_arr.includes("Advocate") == false){
    qn_arr.push("Advocate");
    console.log(qn_arr);
    }
    
    
  } 
}

//Not all backs work the way we want
function goback(id) {
  //var prev = id - 1;
  var gp = document.getElementById(id).parentNode.parentNode.id;
  var prev_gp = document.getElementById(id).parentNode.parentNode.previousElementSibling.id;
  document.getElementById(gp).style.visibility = "hidden"
  document.getElementById(prev_gp).style.visibility = "visible"
  document.getElementById(prev_gp).scrollIntoView(false);
}

function reset() {
  location.reload();
}

function navdisp(id) {
  if (id == "ShelterGo") {
    card_shelter.scrollIntoView(false);
    //Display Police
  } else if (id == "PoliceGo") {
    card_police.style.visibility = "visible";
    card_police.scrollIntoView(false);
  } else if (id == "MedicalGo") {
    card_injury.style.visibility = "visible";
    card_injury.scrollIntoView(false);
  } else if (id == "UniversityGo") {
    card_university.style.visibility = "visible";
    card_university.scrollIntoView(false);
  }
  
  }

function sendTo() {
//Pass QN Array
  localStorage.setItem("qn_arr", JSON.stringify(qn_arr));
  console.log(localStorage);
}




