const jokeEle = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const title = document.getElementById('title')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()
// toggleTitle()

// function toggleTitle() {
//   if (title.innerHTML === 'Go through these jokes until you laugh 😊') {
//     title.innerHTML = '笑ってはいけない英語学習'
//   } else {
//     title.innerHTML = 'Go through these jokes until you laugh 😊'
//   }
// }

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
