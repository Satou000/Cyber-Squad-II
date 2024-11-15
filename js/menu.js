document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menuItens = document.getElementById("menuItens");

  menuToggle.addEventListener("click", function () {
    menuItens.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const imageBackgrounds = document.querySelectorAll(".image-background");
  let currentIndex = 0;

  function updateImageVisibility() {
    imageBackgrounds.forEach((background, index) => {
      background.style.display = index === currentIndex ? "flex" : "none";
    });
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = imageBackgrounds.length - 1; // Loop para o final
    }
    updateImageVisibility();
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < imageBackgrounds.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop para o início
    }
    updateImageVisibility();
  });

  // Inicializa a visibilidade da imagem
  updateImageVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
  const prevCardBtn = document.getElementById("prevCardBtn");
  const nextCardBtn = document.getElementById("nextCardBtn");
  const cardsWrapper = document.querySelector(".cards-wrapper");
  const cards = document.querySelectorAll(".card");
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close-btn");
  let currentIndex = 0;

  function updateCardVisibility() {
    cards.forEach((card, index) => {
      card.style.display =
        index >= currentIndex && index < currentIndex + 4 ? "block" : "none";
    });
  }

  prevCardBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - 4; // Loop para o final
    }
    updateCardVisibility();
  });

  nextCardBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 4) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop para o início
    }
    updateCardVisibility();
  });

  document.querySelectorAll(".saiba-mais-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const modalId = e.target.getAttribute("data-modal");
      modalText.innerHTML = document.getElementById(modalId).innerHTML;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  // Inicializa a visibilidade dos cards
  updateCardVisibility();
});
