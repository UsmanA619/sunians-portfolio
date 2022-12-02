const showMenu = () => {
  const menu = document.getElementById("menuItemsDiv");

  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

const fbIcon = document.getElementById("fbIcon");
const twticon = document.getElementById("twitterIcon");
const ytIcon = document.getElementById("ytIcon");
const instaIcon = document.getElementById("instaIcon");

const changeColors = (id) => {
 
  if (id == "fbIcon") {
    fbIcon.style.color = "black";
    twticon.style.color = "grey";
    ytIcon.style.color = "grey";
    instaIcon.style.color = "grey";
  }
 
  if (id == "twitterIcon") {
    twticon.style.color = "black";
    fbIcon.style.color = "grey";
    ytIcon.style.color = "grey";
    instaIcon.style.color = "grey";
  }
 
  if (id == "ytIcon") {
    ytIcon.style.color = "black";
    fbIcon.style.color = "grey";
    twticon.style.color = "grey";
    instaIcon.style.color = "grey";
  }
 
  if (id == "instaIcon") {
    fbIcon.style.color = "grey";
    twticon.style.color = "grey";
    ytIcon.style.color = "grey";
    instaIcon.style.color = "black";
  }
};

const changeToDefaultColor = () => {
  fbIcon.style.color = "black";
  twticon.style.color = "black";
  ytIcon.style.color = "black";
  instaIcon.style.color = "black";
};
