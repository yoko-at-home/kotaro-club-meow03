const jokeEle = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const titleEle = document.getElementById('title')

const message1 = 'Can you laugh?'
const message2 = 'Go through these jokes until you laugh'

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function toggleTitle() {
  titleEle.innerHTML = titleEle.textContent === message1 ? message2 : message1
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

  toggleTitle()

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
