document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menuItens = document.getElementById("menuItens");

  menuToggle.addEventListener("click", function () {
    menuItens.classList.toggle("active");
  });
});
