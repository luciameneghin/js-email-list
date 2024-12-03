email-list
===

## Consegna
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
**Bonus**
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API
## Logica
- chiamare l'API per ottenere l'email
- ciclo for per creare 10 email random ogni volta
- in html creare un <ul> in cui andrò ad inserire tramite JS ogni nuova mail <li> e le stampo in pagina con .innerHTML
**Logica bonus**
- inserire un bottone con .addEvenListener che al 'click' genera 10 nuove email
- aggiungere un loading... che scompare quando l'API ha gia tutte le 10 email
