# Generators

>Un **générateur** est un type de fonction spécial qui fonctionne comme une fabrique (factory) d'**itérateurs**. Une fonction devient un générateur lorsqu'elle contient une ou plusieurs expressions `yield` et qu'elle utilise la syntaxe `function*`. Source [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs#Générateurs)

Un **générateur** c'est en quelque sorte une fonction qui a plusieurs *return* sur lesquels on peut itérer à l'aide de :
- `yield` permet d'interrompe et de reprendre un **générateur**.

> Pour ceux qui viennent du C, cela peut s'apparenter aux instructions de contrôle..mais en plus utiles !

Exemples :
```js
/* Exemple - 1 */
function* myGenerator() {
    yield 'fist step'
    yield 'second step'
    yield 'third step'
}

const test = myGenerator()
console.log(test.next()) // { value: 'fist step', done: false }
console.log(test.next()) // { value: 'second step', done: false }
console.log(test.next()) // { value: 'third step', done: false }
console.log(test.next()) // { value: undefined, done: true }
/* Exemple - 2 */
function* myGenerator2() {
  let i = 0
  yield i
  i++
  yield i
  i++
  yield i
}
const test2 = myGenerator2()
console.log(test2.next()) // { value: 0, done: false }
console.log(test2.next()) // { value: 1, done: false }
console.log(test2.next()) // { value: 2, done: false }
console.log(test2.next()) // { value: undefined, done: true }

/* Exemple - 3 */
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879 },
  { first: 'Isaac', last: 'Newton', year: 1643 },
  { first: 'Galileo', last: 'Galilei', year: 1564 },
  { first: 'Marie', last: 'Curie', year: 1867 },
  { first: 'Johannes', last: 'Kepler', year: 1571 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
  { first: 'Max', last: 'Planck', year: 1858 },
];

function* loop(arr) {
  for (const item of arr) {
    yield item
  }
}

const inventorGen = loop(inventors)

console.log(inventorGen.next()) 
// { value: { first: 'Albert', last: 'Einstein', year: 1879 }, done: false }
// ...
```

C'est plutôt cool, notamment en Ajax :

```js
const ajax = url => fetch(url)
    .then(data => data.json())
    .then(data => dataGen.next(data)) 
    // stockera dans la variable correponsdante le résultat de la requête
    // puis passera à la suivante

function* steps() {
  console.log('fetching a user')
  const mojombo = yield ajax('https://api.github.com/users/mojombo')
  console.log(mojombo)

  console.log('fetching fat joe')
  const fatJoe = yield ajax('https://api.discogs.com/artists/51988')
  console.log(fatJoe)
}

const dataGen = steps()
dataGen.next() // kick it off
```

![result-ajax](result.png)

On peut également utiliser la boucle `for..of` sur les **générateur** :

```js
function* lyrics() {
  yield `Où sont les cerfs ? ` 
  yield `Dans la forêt.` 
  yield `Qu'est-ce qu'ils y font ?` 
  yield `Ils y travaillent.` 
  yield `À quel métier ?` 
  yield `Au charpentier.` 
  yield `Faut-il les tuer ?` 
  yield `Noooon` 
}

const chant = lyrics()

for (const ligne of chant) {
  console.log(ligne)
}
// Où sont les cerfs ? 
// Dans la forêt.
// Qu'est-ce qu'ils y font ?
// Ils y travaillent.
// À quel métier ?
// Au charpentier.
// Faut-il les tuer ?
// Noooon
```

## Liens utiles

- [.](http://putaindecode.io/fr/articles/js/es2015/generators/)