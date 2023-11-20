// Business Logic
function generateAnswer(number) {
  const result = [];
  for (let i = 0; i < - number; i++) {
    let message = "";
    if (i.toString().includes("1")) {
      message += "won't you be my neighbor?";
    } else if (i.toString().includes("2")) {
      message += "boop";
    } else if (i.toString().includes("3")) {
      message += "beep";
    } else {
      message = i.toString();
    }
    result.push(message);
  }
  return result;
}

// UI Logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("numberCounter");
  const roboger = document.getElementById("roboger");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  })
})