let allStories = [];

window.onload = async function () {
    const response = await fetch("stories.json");
    allStories = await response.json();
};

function drawGacha() {
    if (allStories.length === 0) {
        alert("資料還沒載入完成，請稍等一下");
        return;
    }

    const machine = document.querySelector(".machine-img");
    const dropBall = document.getElementById("dropBall");
    const modal = document.getElementById("modal");
    const result = document.getElementById("result");

    modal.classList.add("hidden");

    const prize = allStories[Math.floor(Math.random() * allStories.length)];

    dropBall.className = "drop-ball";
    void dropBall.offsetWidth;

    machine.classList.add("machine-shake");

    setTimeout(() => {
        dropBall.classList.add("drop-animation");
    }, 300);

    setTimeout(() => {
        machine.classList.remove("machine-shake");
        dropBall.classList.add("center-ball");
    }, 1200);

    setTimeout(() => {
        dropBall.classList.add("ball-shake");
    }, 1700);

    setTimeout(() => {
        dropBall.classList.remove("ball-shake");
        dropBall.classList.add("open-ball");
    }, 2400);

    setTimeout(() => {
        result.innerHTML = `
            <h2>${prize.department}</h2>
            <p><strong>${prize.grade}｜${prize.student}</strong></p>
            <p>${prize.story}</p>
            <p class="tags">${prize.tags}</p>
        `;

        modal.classList.remove("hidden");
        dropBall.className = "drop-ball";
    }, 3100);
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}