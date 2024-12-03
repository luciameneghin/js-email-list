const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

// array vuoto per le 10 email random
let emailArray = [];
let counter = 0;

// funzione per una email
function email() {
  axios.get(endpoint)
    .then(response => {
      emailArray.push(response.data.response)
      counter++;
      if (counter === 10) {
        console.log(emailArray);
      }
    })
    .catch(err => {
      console.log(`Errore nella richiesta dell\'email:`, err);
    });
}

// chiamata alla funzione per ottenere la risposta HTTP
for (let i = 0; i < 10; i++) {
  email()
}

