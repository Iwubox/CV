let darkmode = false;
let language = "Swedish";

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
