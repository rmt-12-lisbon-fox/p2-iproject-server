var axios = require("axios").default;

let dadJokes = (req, res) => {
  try {
    axios({
      url: 'https://dad-jokes.p.rapidapi.com/random/joke',
      method: 'GET',
      headers: {
        'x-rapidapi-key': '35bdcf17c8msh2f9991bf7cd8a0dp1e82a9jsn333b8bf6775a',
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
      }
    })
      .then(({ data }) => {
        const setup = data.body[0].setup
        const punchline = data.body[0].punchline
        res.status(200).json({ setup, punchline })
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = dadJokes