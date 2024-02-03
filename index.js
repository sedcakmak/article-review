const shareBtn = document.getElementById("share-btn");
const wrapper = document.querySelector(".share-btn-wrapper");
const options = document.querySelector(".social-media-wrapper");

shareBtn.addEventListener("click", showOptions);
shareBtn.addEventListener("mouseout", cancelShowOptions);

function showOptions() {
  options.style.display = "flex";
  shareBtn.style.filter = "grayscale(100%)";
}

function cancelShowOptionss() {
  options.style.display = "none";
}
