(function () {
    const softwere = [
      `<div class="software-container">
      <img src="img/gitpod-icone.png" alt="git-pod" width=150 id="git-pod"></div>`,
      `<div class="vs-icone">
      <img src="img/visual-studio-code-icon-png.png" alt="vs-code" width=100 id="vs-code">
      </div>`,
      `<div class="github-icone">
      <img src="img/github-icon.png" alt="github" width=100 id="github">
          </div>`,
          `<div class="bt-icone">
      <img src="img/bootstrap.png" alt="bootstrap" width=150 id="bootstrap">
  </div>,
  ];

  let firstSlide = 0;

function showFirstSlide() {
  const softContainer = document.querySelector(".software-container");

  softContainer.innerHTML = softwere[firstSlide];
}

function nextSlide() {
  firstSlide++;
  if (firstSlide >= softwere.length) firstSlide = 0;
  showFirstSlide();
}

function prevSlide() {
  firstSlide--;
  if (firstSlide < 0) firstSlide = softwere.length - 1;
  showFirstSlide();
}

function prevSlide() {
  firstSlide--;
  if (firstSlide < 0) firstSlide = softwere.length - 1;
  showFirstSlide();
}