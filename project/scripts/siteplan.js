const parts = [
    { name: "K&N Air Intake", type: "Engine", effect: "Improved Airflow" },
    { name: "FlashPro", type: "Engine", effect: "ECU Tuning" },
    { name: "CANBUS Decoder", type: "Electronics", effect: "Radio Integration" },
    { name: "Lowering Springs", type: "Suspension", effect: "Better Stance" }
];

const grid = document.querySelector("#item-grid");
const welcome = document.querySelector("#welcome-msg");
const filterAll = document.querySelector("#filter-all");
const filterEngine = document.querySelector("#filter-engine");

function renderParts(filteredList) {
    grid.innerHTML = "";
    filteredList.forEach(part => {
        const card = `
            <div class="card">
                <h3>${part.name}</h3>
                <p><strong>Category:</strong> ${part.type}</p>
                <p><strong>Main Benefit:</strong> ${part.effect}</p>
            </div>
        `;
        grid.innerHTML += card;
    });
}

function trackVisits() {
    let count = localStorage.getItem("visitCount") || 0;
    count++;
    localStorage.setItem("visitCount", count);
    
    if (count === 1) {
        welcome.innerHTML = `<h2>Welcome to the Hub! This is your first visit.</h2>`;
    } else {
        welcome.innerHTML = `<h2>Welcome back! You have visited this hub ${count} times.</h2>`;
    }
}

filterAll.addEventListener("click", () => renderParts(parts));

filterEngine.addEventListener("click", () => {
    const engineOnly = parts.filter(p => p.type === "Engine");
    renderParts(engineOnly);
});

document.querySelector("#last-modified").textContent = `Last Modified: ${document.lastModified}`;

trackVisits();
renderParts(parts);