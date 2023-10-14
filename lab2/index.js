const array = ["red", "blue"];
const $body = document.querySelector("body");

array.forEach((value, index) => {
  const button = document.createElement("button");
  button.textContent = value;
  button.style.marginTop = "20px";

  button.addEventListener("click", () => {
    $body.style.backgroundColor = value;
  });

  $body.appendChild(button);
});
const calculateBac2 = (a, b) => {
  const delta = b ** 2 - 4 * a * c;

  if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Phương trình có hai nghiệm: x1 = ${x1}, x2 = ${x2}`);
    return [x1, x2];
  } else if (delta === 0) {
    const x = -b / (2 * a);
    console.log(`Phương trình có nghiệm kép: x = ${x}`);
  } else {
    console.log("Phương trình vô nghiệm");
  }
};
const a = 1;
const b = -5;
const c = 6;

const ketQua = calculateBac2(a, b, c);

console.log(ketQua);
