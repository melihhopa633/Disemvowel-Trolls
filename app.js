function disemvowel(str) {
  let trollStr = str.split("");

  let untrolled = [];

  for (let i = 0; i < trollStr.length; i++) {
    if (trollStr[i] === "a") {
    } else if (trollStr[i] === "e") {
    } else if (trollStr[i] === "ı") {
    } else if (trollStr[i] === "i") {
    } else if (trollStr[i] === "o") {
    } else if (trollStr[i] === "ö") {
    } else if (trollStr[i] === "u") {
    } else if (trollStr[i] === "ü") {
    } else if (trollStr[i] === "A") {
    } else if (trollStr[i] === "E") {
    } else if (trollStr[i] === "I") {
    } else if (trollStr[i] === "İ") {
    } else if (trollStr[i] === "O") {
    } else if (trollStr[i] === "Ö") {
    } else if (trollStr[i] === "U") {
    } else if (trollStr[i] === "Ü") {
    } else {
      untrolled.push(trollStr[i]);
    }
  }
  let text = untrolled.join("");
  return text;
}
