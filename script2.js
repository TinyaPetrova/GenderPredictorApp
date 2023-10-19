const charactersContainer = document.getElementById("charactersContainer");

function createCharacterCard(character) {
  const card = document.createElement("div");
  card.classList.add("characterCard");

  const name = document.createElement("h2");
  name.textContent = `${character.name} ${character.surname}`;

  const gender = document.createElement("p");
  gender.textContent = `Gender: ${character.gender}`;

  const mark = document.createElement("p");
  mark.textContent = `Mark: ${character.mark}`;

  const image = document.createElement("img");
  image.src = character.image;
  image.alt = `${character.name} ${character.surname}`;

  card.appendChild(name);
  card.appendChild(gender);
  card.appendChild(mark);
  card.appendChild(image);

  return card;
}

fetch("https://tinyapetrova.github.io/lesson15_task1_fakeAPI/fakeAPI.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((character) => {
      const characterCard = createCharacterCard(character);
      charactersContainer.appendChild(characterCard);
    });
  })
  .catch((error) => {
    console.error("Error while fetching data:", error);
  });
