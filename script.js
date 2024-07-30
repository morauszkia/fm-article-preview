const shareBtnEl = document.getElementById("share-icon");
const shareContainerEl = document.getElementById("share-container");

const toggleShareContainer = () => {
  shareContainerEl.classList.toggle("open");
  shareBtnEl.classList.toggle("open");
};

shareBtnEl.addEventListener("click", toggleShareContainer);
