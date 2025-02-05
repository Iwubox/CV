let darkmode = false;
let language = "Swedish";
let simple = false;

//darkmode
//onclick
if (darkmode === false) {
  darkmode = true;
} else if (darkmode === true) {
  darkmode = false;
} else {
  console.log("error darkmode");
}

//language
//onclick
if (language === "Swedish") {
  language = "English";
} else if (language === "English") {
  language = "Swedish";
} else {
  console.log("error language");
}

let simpleSite = document.getElementsByClassName("simpleSite")[0];
let advancedSite = document.getElementsByClassName("advancedSite")[0];

let slider = document.getElementsByClassName("sliderCircleHB");

slider[0].classList.add("sliderOff");

toggleSimple = () => {
  if (simple === false) {
    simple = true;

    slider[0].classList.add("sliderOn");
    slider[0].classList.remove("sliderOff");
  } else if (simple === true) {
    simple = false;

    slider[0].classList.remove("sliderOn");
    slider[0].classList.add("sliderOff");
  } else {
    console.log("error simple");
  }
};
