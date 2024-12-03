const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const ul = document.querySelector('.email-list');
const btn = document.querySelector('.btn');

// array vuoto per le 10 email random
let emailArray = [];
let counter = 0;


// funzione per una email
function email() {
  axios.get(endpoint)
    .then(response => {
      emailArray.push(response.data.response);
      counter++;

      if (counter === 10) {
        emailArray.forEach(email => {
          const li = document.createElement('li');
          li.innerHTML = email;
          ul.appendChild(li);
        });
        emailArray = [];
        counter = 0;
        console.log(emailArray);
      }
    })
    .catch(err => {
      console.log(`Errore nella richiesta dell'email:`, err);
    });
}


btn.addEventListener('click', loadEmail);

function loadEmail() {
  document.querySelector('.generate').className = 'd-none'
  ul.innerHTML = '';
  // chiamata alla funzione per ottenere la risposta HTTP
  for (let i = 0; i < 10; i++) {
    email();
  }
}

