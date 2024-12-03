const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

// funzione per una email
axios.get(endpoint)
  .then(response => {
    console.log(response.data.response);
  })
  .catch(err => {
    console.log(`Errore nella richiesta dell\'email:`, err);
  })

