// script.js
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", () => {
  const h1 = document.createElement("h1"); // Create new <h1>
  h1.textContent = "Entered Metaverse"; // Set its content
  statusParagraph.replaceWith(h1); // Replace <p> with <h1>
});
