//your JS code here. If required.
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", () => {
  statusParagraph.outerHTML = "<h1 id='status'>Entered Metaverse</h1>";
});
