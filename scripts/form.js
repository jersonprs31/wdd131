const hondaModels = [
  { id: "civic-type-r", name: "Honda Civic Type R" },
  { id: "civic-si", name: "Honda Civic Si" },
  { id: "accord-sport", name: "Honda Accord Sport" },
  { id: "s2000", name: "Honda S2000" },
  { id: "nsx", name: "Honda NSX" },
  { id: "integra", name: "Honda Integra Type R" }
];

document.addEventListener("DOMContentLoaded", () => {
    populateModelSelect();
    displayReviewCount();
    setFooterYear();
});

function populateModelSelect() {
    const selectElement = document.getElementById("honda-model");
    
    const optionsHTML = hondaModels.map(model => 
        `<option value="${model.id}">${model.name}</option>`
    ).join("");

    selectElement.innerHTML += optionsHTML;
}

function displayReviewCount() {
    let reviewCount = localStorage.getItem("hondaHubReviewCount");

    if (!reviewCount) {
        reviewCount = 0;
    }

    const counterElement = document.getElementById("review-counter");
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
}

function setFooterYear() {
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}