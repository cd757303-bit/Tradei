script.js
const uploadBtn = document.getElementById("uploadBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

uploadBtn.onclick = () => {
    modal.style.display = "block";
};

closeModal.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
