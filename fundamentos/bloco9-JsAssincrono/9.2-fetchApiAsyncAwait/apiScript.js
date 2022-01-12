// apiScript.js
// Exercício 1
const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = async () => {
  const myObject = {
    method: "GET",
    headers: { accept: "application/json" },
  };
  const joke = await fetch(API_URL, myObject)
  const response = await joke.json()
  console.log(response);

  const h2 = document.getElementById('jokeContainer')
  h2.innerText = response.joke

};



window.onload = () => fetchJoke();
