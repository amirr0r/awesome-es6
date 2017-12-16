# [`Proxies`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy)

Avant de voir ce que sont les `Proxies`, voici la syntaxe :
```js
const p = new Proxy(target, handler)
```

- Le paramètre `target` correspond à un objet cible.
- Le paramètre `handler` est un objet qui fait office de gestionnaire. Il est composé de méthodes que l'on appelle les `traps`. Ces dernières définissent le comportement du proxy lorsqu'on utilise une opération sur celui-ci.

>Le proxy transfère (ou pas) toutes les opérations qui sont appliquées à l'objet cible.

Exemples :
```js
var cible = {}
var p = new Proxy(cible, {})

p.a = 37 // L'opération est transmise à la cible par le proxy

console.log(cible.a) // 37. L'opération a bien été transmise
```

On peut donc bloquer certaines opérations :
```js
const handler ={
  get: (target, key) => key in target ? 
    target[key] : "Oops ! Look like the key doesn't exist"
}

const p = new Proxy({}, handler)
p.a = 1
p.b = 1

console.log(p) // { a: 1, b: 1 }
console.log(p.c) // Oops ! Look like the key doesn't exist
```

Si `p` était un simple objet :
```js
const p = {}
p.a = 1
p.b = 1

console.log(p) // { a: 1, b: 1 }
console.log(p.c) // undefined
```

Autres exemples :
```js
/* Exemple 1*/
const person = new Proxy({ name: 'Toto', age: undefined }, {
  set(target, key, value) {
    if (typeof value !== 'number')
      throw new Error('age must be a number')
    if (value < 0)
      throw new Error('age must be a positive number')
    target[key] = value
  }
})
console.log(person) // { name: 'Toto', age: undefined }
person.age = 'ZJKSDBCA!;,SBC kaj'
console.log(person) // Error: age must be a number
person.age = false
console.log(person) // Error: age must be a number
person.age = -789
console.log(person) //Error: age must be a positive number
person.age = 14
console.log(person) // { name: 'Toto', age: 14 }
/* Exemple 2*/
const notes = new Proxy([], {
    set(target, key, value) {
      if (!(parseInt(key) >= 0))
        throw new Error('the key must be a number')
      if (typeof value !== 'number')
        throw new Error('note must be a number')
      if (value < 0)
        throw new Error('note must be a positive number')
      if (target[key] !== undefined)
        throw new Error('the key is already taken')
      if (key > 0 && target[key - 1] === undefined)
        throw new Error('no empty items allowed')
      target[key] = value
  }
})
notes[0] = 12
notes[1] = 7
notes[2] = 20
// notes[1] = 12 // Error: the key is already taken
// notes[42] = 13 // Error: no empty items allowed
// ...
```

Bon ok, mais en quoi est-ce utile ? Est-ce que c'est vraiment nécessaire ?
*Je fais attention quand j'utilise mes objets. Je ne suis pas bête.*

Oui toi sans doute, mais tes utilisateurs peut-être pas...

Imaginez que vous développez une API, vos utilisateurs auront certainement besoin d'utiliser vos objets. Eh bien, l'objet `Proxy` va vous permettre de mieux contrôler leur accès et utilisation.

>Je vous laisse jeter un coup d'oeil au [Proxy revocable](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy/revocable)

## Articles
- [ES6, ES2015 : les Proxy](http://putaindecode.io/fr/articles/js/es2015/proxy/)