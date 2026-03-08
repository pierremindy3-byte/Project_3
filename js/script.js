document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript file loaded successfully.");

  const links = document.querySelectorAll("ul:first-of-type a");

  links.forEach(function(link) {
    link.addEventListener("mouseover", function() {
      link.style.textDecoration = "underline";
    });

    link.addEventListener("mouseout", function() {
      link.style.textDecoration = "none";
    });
  });

});