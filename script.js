const jokeEle = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const titleEle = document.getElementById('title')

jokeBtn.addEventListener('click', generateJoke, toggleTitle)

generateJoke()
toggleTitle()

function toggleTitle() {
  titleEle.innerHTML === 'Can you laugh?'
    ? 'Go through these jokes until you laugh'
    : 'Can you laugh?'
}

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  jokeEle.innerHTML = data.joke

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }
//   fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//       jokeEle.innerHTML=data.joke
//     })
}
