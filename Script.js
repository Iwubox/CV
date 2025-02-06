let darkmode = false;
let language = "Swedish";
let simple = false;

darkmode = () => {
  if (darkmode === false) {
    darkmode = true;
  } else if (darkmode === true) {
    darkmode = false;
  } else {
    console.log("error darkmode");
  }
};

language = () => {
  if (language === "Swedish") {
    language = "English";
  } else if (language === "English") {
    language = "Swedish";
  } else {
    console.log("error language");
  }
};

let slider = document.getElementsByClassName("sliderCircleHB");

slider[0].classList.add("sliderOff");
toggleSimple = () => {
  if (simple === false) {
    simple = true;
    changeSiteSimplicity(simple);

    slider[0].classList.add("sliderOn");
    slider[0].classList.remove("sliderOff");
  } else if (simple === true) {
    simple = false;
    changeSiteSimplicity(simple);

    slider[0].classList.remove("sliderOn");
    slider[0].classList.add("sliderOff");
  } else {
    console.log("error simple");
  }
};

let simplestSite = document.getElementsByClassName("simplestSite");
let advancedSite = document.getElementsByClassName("advancedSite");

changeSiteSimplicity = (Simple) => {
  if (Simple === true) {
    simplestSite[0].style.display = "block";
    advancedSite[0].style.display = "none";
  } else if (Simple === false) {
    simplestSite[0].style.display = "none";
    advancedSite[0].style.display = "block";
  } else {
    console.log("error simpleSite");
  }
};
