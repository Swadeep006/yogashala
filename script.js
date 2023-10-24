let navheight = document.getElementById("navigation").offsetHeight;
let homeheight = document.getElementById("home").offsetHeight - 100;
let servicesheight =
  document.getElementById("our-services").offsetHeight + homeheight;
let aboutheight =
  document.getElementById("about-us").offsetHeight + servicesheight;
let galleryheight =
  document.getElementById("gallery").offsetHeight + aboutheight;
let contactheight =
  document.getElementById("contact").offsetHeight + galleryheight;
document.documentElement.style.scrollPaddingTop = 90 + "px";
window.onscroll = function () {
  if (scrollY < homeheight) {
    document.getElementById("homelink").style.color = "#975f0f";
    document.getElementById("servicelink").style.color = "white";
    document.getElementById("aboutlink").style.color = "white";
    document.getElementById("gallerylink").style.color = "white";
    document.getElementById("contactlink").style.color = "white";
  } else if (scrollY >= homeheight && scrollY < servicesheight) {
    document.getElementById("homelink").style.color = "white";
    document.getElementById("servicelink").style.color = "#975f0f";
    document.getElementById("aboutlink").style.color = "white";
    document.getElementById("gallerylink").style.color = "white";
    document.getElementById("contactlink").style.color = "white";
  } else if (scrollY >= servicesheight && scrollY < aboutheight) {
    document.getElementById("homelink").style.color = "white";
    document.getElementById("servicelink").style.color = "white";
    document.getElementById("aboutlink").style.color = "#975f0f";
    document.getElementById("gallerylink").style.color = "white";
    document.getElementById("contactlink").style.color = "white";
  } else if (scrollY >= aboutheight && scrollY < galleryheight) {
    document.getElementById("homelink").style.color = "white";
    document.getElementById("servicelink").style.color = "white";
    document.getElementById("aboutlink").style.color = "white";
    document.getElementById("gallerylink").style.color = "#975f0f";
    document.getElementById("contactlink").style.color = "white";
  } else if (scrollY >= galleryheight && scrollY < contactheight) {
    document.getElementById("homelink").style.color = "white";
    document.getElementById("servicelink").style.color = "white";
    document.getElementById("aboutlink").style.color = "white";
    document.getElementById("gallerylink").style.color = "white";
    document.getElementById("contactlink").style.color = "#975f0f";
  } else {
    console.log("error");
  }
  backfunction();
  mobilebackfunction();
};

function backfunction() {
  if (scrollY < homeheight) {
    document.getElementById("navigation").style.backgroundColor =
      "rgba(0,0,0,0)";
    document.getElementById("logo").style.width = "150px";
  } else if (scrollY >= homeheight) {
    document.getElementById("navigation").style.backgroundColor = "#9F916D";
    document.getElementById("logo").style.width = "100px";
  }
}

document.getElementById("check").oninput = function () {
  if (document.getElementById("check").checked == true) {
    document.getElementById("thenav").style.display = "flex";
  } else {
    document.getElementById("thenav").style.display = "none";
  }
};

function mobilebackfunction() {
  if (scrollY < homeheight) {
    document.getElementById("m-nav").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("m-logo").style.width = "100px";
  } else if (scrollY >= homeheight) {
    document.getElementById("m-nav").style.backgroundColor = "#9F916D";
    document.getElementById("m-logo").style.width = "50px";
  }
}

document.getElementById("mobilehome").onclick = function () {
  window.location.href = "#home";
  document.getElementById("thenav").style.display = "none";
  document.getElementById("check").checked = false;
};

document.getElementById("mobileservice").onclick = function () {
  window.location.href = "#our-services";
  document.getElementById("thenav").style.display = "none";
  document.getElementById("check").checked = false;
};
document.getElementById("mobileabout").onclick = function () {
  window.location.href = "#about-us";
  document.getElementById("thenav").style.display = "none";
  document.getElementById("check").checked = false;
};
document.getElementById("mobilegallery").onclick = function () {
  window.location.href = "#gallery";
  document.getElementById("thenav").style.display = "none";
  document.getElementById("check").checked = false;
};
document.getElementById("mobilecontact").onclick = function () {
  window.location.href = "#contact";
  document.getElementById("thenav").style.display = "none";
  document.getElementById("check").checked = false;
};

console.log(aboutheight);
console.log(galleryheight);
console.log(contactheight);