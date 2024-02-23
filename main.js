let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");

btn.onclick = function () {
  btn.classList.toggle("active");
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    btnText.innerHTML = "Light Mode";
  } else {
    btnText.innerHTML = "Dark mode";
  }
};
