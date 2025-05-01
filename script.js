// script.js
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", () => {
  statusParagraph.textContent = "Entered Metaverse";
  statusParagraph.classList.add("updated");
});
