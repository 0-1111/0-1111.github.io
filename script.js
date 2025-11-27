// script.js
document.querySelector(".btn").addEventListener("click", function() {
  window.scrollTo({
    top: document.querySelector("#contact").offsetTop,
    behavior: "smooth"
  });
});
