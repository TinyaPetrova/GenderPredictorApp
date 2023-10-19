const nameInput = document.getElementById("nameInput");
const resultParagraph = document.getElementById("result");
const button = document.getElementById("btn");
const loader = document.getElementById("loader");
const hint = document.getElementById("hint");

function predictGender() {
  resultParagraph.style.display = "none";
  hint.style.display = "none";
  loader.style.display = "block";

  const name = nameInput.value;

  fetch(`https://api.genderize.io/?name=${name}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.gender === "male") {
        resultParagraph.textContent = `${name} is a male name with a probability of ${data.probability}.`;
      } else if (data.gender === "female") {
        resultParagraph.textContent = `${name} is a female name with a probability of ${data.probability}.`;
      } else {
        resultParagraph.textContent = `We cannot determine a gender for this name :(`;
      }
      resultParagraph.style.display = "block";
      loader.style.display = "none";
      hint.style.display = "block";
    })
    .catch((error) => {
      resultParagraph.textContent = "We found an error while fetching data.";
      hint.style.display = "block";
    })
    .finally(() => {
      loader.style.display = "none";
      resultParagraph.style.display = "block";
    });
}

button.addEventListener("mouseenter", function () {
  button.style.cursor = "pointer";
});

button.addEventListener("mouseleave", function () {
  button.style.cursor = "auto";
});
