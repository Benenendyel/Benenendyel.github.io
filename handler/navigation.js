const historyStack = [];

function storeLocations() {
  const current = location.hash || "#welcome-section";

  if (current === "#welcome-section") {
    historyStack.length = 0;
    historyStack.push(current);
    return;
  }

  if (historyStack[historyStack.length - 1] !== current) {
    historyStack.push(current);
  }
}

function goBack() {
  historyStack.pop();

  const prev = historyStack.pop();

  location.hash = prev || "#welcome-section";
}

function goHome() {
  historyStack.length = 0;
  location.hash = "#welcome-section";
}

function updateBackButton() {
  if (location.hash === "#welcome-section") {
    backBtn.style.opacity = "0.4";
    backBtn.style.pointerEvents = "none";
  } else {
    backBtn.style.opacity = "1";
    backBtn.style.pointerEvents = "auto";
  }
}

const backBtn = document.querySelector(".navigation-bar .back-button");
const homeBtn = document.querySelector(".navigation-bar .home-button");

window.addEventListener("hashchange", () => {
  storeLocations();
  updateBackButton();

  if (window.resetAuthInputs) {
    window.resetAuthInputs();
  }
});

backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  goBack();
});

homeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  goHome();
});

/* =========================
   INIT
========================= */

storeLocations();
updateBackButton();
