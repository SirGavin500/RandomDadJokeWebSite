const jokeText = document.getElementById("joke");
const button = document.getElementById("getJokeBtn");

const getJoke = () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      jokeText.textContent = data.joke;
    })
    .catch(() => {
      jokeText.textContent = "Could not load a joke right now.";
    });
};

button.addEventListener("click", getJoke);
