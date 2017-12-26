# [`Async`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function) + [` Await`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await)

>Bon avant de commencer, j'aimerais vous prévenir que les avis me semblent mitigés quand à son utilisation. Mais ma volonté étant de découvrir les outils, expliquer ce que j'en ai compris et présenter quelques use-cases, je vais quand même vous parler d'async await.

## Rappel

Quand on execute du code **synchrone** on doit attendre qu'une tâche soit terminée avant de passer à une autre. Tandis qu'en **asynchrone**, lorsque l'on exécute une tâche, on peut directement passer à une autre tâche avant que la précédente ne soit terminée.

Jusqu'ici pour traiter les requêtes asynchrones on le faisait de cette manière :
```js
/* Exemple 1 */
fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))
/* Exemple 2 */
// ... some code
promiseRequest(oAuthOptions()).then(response => {
  const token = JSON.parse(response).access_token
  return promiseRequest(searchOptions(token))
}).then(response => {
  const search = JSON.parse(response)
  search.statuses.forEach(status => console.log(status.text))
})
```

## Combinaison : `Promises` + `Generators`

Si on combine ces deux-là, on se rapproche d'une syntaxe synchrone :
```js
import co from 'co'

co(function *() {
  const oAuthResponse = yield promiseRequest(oAuthOptions())
  const token = JSON.parse(oAuthResponse).access_token
  const searchResponse = yield promiseRequest(searchOptions(token))
  const search = JSON.parse(searchResponse)
  search.statuses.forEach(status => console.log(status.text))
})
```
>La librairie 'co' que l'on voit ici attend le retour d'une promesse pour relancer l'execution de la fonction.

## A quoi servent `async` et `await` ?

L'objectif d'`async` / `await` est de simplifier le chaînage des promesses.
> *Globalement, ça va vous permettre d'écrire du code asynchrone avec une logique synchrone.* [Grafikart](https://www.youtube.com/watch?v=uUZxHkcidps&t=20m52s).

Le mot clé `await` est seulement disponible dans une fonction `async`. Il s'agit un préfixe pour les promesses mettant "en attente" le reste de la fonction jusqu'à que la promesse soit acquittée.
```js 
async function myFunction() {
  // result prend la valeur renvoyé par maPromise
  const result = await maPromise
  // on n'arrivera à cette ligne que lorsque "maPromise" sera résolue
}
```

Si on reprend l'exemple précédent et que l'on remplace `function *` par `async function` et `yield` par `await`, c'est le même principe. 
Pour obtenir le même résultat :
```js
async function start() {
  const authResponse = await promiseRequest(authOptions())
  const token = JSON.parse(authResponse).access_token
  const searchResponse = await promiseRequest(searchOptions(token))
  const search = JSON.parse(searchResponse)
  search.statuses.forEach(status => console.log(status.text))
}

start()
```

## Exemple concret + capture d'erreurs

Ici je reprends l'exemple de [naholyr](http://putaindecode.io/fr/articles/js/es2016/async-await/). 

**Contexte**: On est le 6 décembre, c'est la Saint-Nicolas, on veut envoyer un message à tous nos utilisateurs qui s'appellent Nicolas :

Sans `async / await` :
```js
function sendEmails(query) {
  const usersP = getUsers(query)
  // On récupère le champ "email" de tous les utilisateurs
  const emailsP = usersP.then(users => users.map(u => u.email))
  // Pour chaque email…
  const sentP = emailsP.then(emails =>
    emails.map(email => {
      // … on envoie un mail
      return sendMail(email, "Bonne fête")
    })
  )
  // On attend que tous les envois soient résolus
  return Promise.all(sentP)
}

sendEmails({ firstName: "Nicolas" })
  .then(() => console.log("OK"))
  .catch(() => console.error("FAIL"))
```

Avec `async / await` :
```js
async function sendEmails(query) {
  const users = await getUsers(query)
  const emails = users.map(u => u.email)
  const sentP = emails.map(email => sendMail(email, "Bonne fête"))
  return await Promise.all(sentP)
}

// Il faut wrapper notre code autour d'une fonction asynchrone pour utiliser "await"
async function main() {
  // on utilise try...catch pour récupérer les erreurs
  try {
    await sendEmails({ firstName: "Nicolas" })
    console.log("OK")
  } catch (e) {
    console.error("FAIL")
  }
}

main()
```

Quel code est le plus concis ? le plus lisible ? C'est assez subjectif en réalité.

## Liens

- https://www.youtube.com/watch?v=0GoG-Kxhia8
- https://www.smooth-code.com/articles/javascript-async-await
- https://medium.com/@benlesh/async-await-it-s-good-and-bad-15cf121ade40
- https://joashc.github.io/posts/2016-06-10-async-await.html
- https://www.xul.fr/ecmascript/async-await.php
- http://putaindecode.io/fr/articles/js/es2016/async-await/
- https://www.itrust.fr/la-programmation-asynchrone-javascript/