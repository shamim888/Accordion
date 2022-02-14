const header = document.querySelectorAll(".accordion");
const body = document.querySelectorAll(".panel");

for (let i = 0; i < header.length; i++) {
  header[i].addEventListener("click", () => {
    body[i].classList.toggle("hidden");
    });
  }