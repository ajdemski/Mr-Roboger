// Business Logic
function generateAnswer(number) {
  const result = [];
    for (let i = 0; i <- number; i++) {
    let message = "";
    if (i.toString().includes("1")) {
      message += "boop";
    } else if (i.toString().includes("2")) {
      message += "beep";
    } else {
      message = i.toString();
    }
    result.push(message);
  }
}


// UI Logic
