# [`Maps`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map) & [`WeakMaps`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakMap)

## Map

>Si tu viens de Java tu dois connaître les Maps.
>Si tu viens de Python tu dois connaître les Dictionnaire.
>Si tu viens de PHP tu dois connaître les tableaux associatifs.

À la différence de `Set`, `Map` repose sur un sytème de clé-valeur (comme un objet). 

Pour ajouter un élément, on utilise `set()` :
```js
const profs = new Map()

profs.set('Cataldi', 'web')
profs.set('Simonot', 'prog')
profs.set('Homps', 'maths')

console.log(profs) // Map { 'Cataldi' => 'web', 'Simonot' => 'prog', 'Homps' => 'maths' }
```

Pour en récupérer un, on utilise `get()` :
```js
const boxeurs = new Map([[1, "Ali"], [2, "Tyson"]])

console.log(boxeurs.get(1)) // Ali
```

Ce qui est cool, c'est qu'on peut le parcourir de plusieurs manières.
```js
/* 1 */
const notes = new Map()

notes.set('Intello', 20)
notes.set('Moyen', 10)
notes.set('Cancre', 3)

notes.forEach((note, eleve) => console.log(note, eleve))
// 20 'Intello'
// 10 'Moyen'
// 3 'Cancre'

/* 2 */
for (const note of notes) {
  console.log(note)
}
// On récupère un tableau pour chaque couple...intéressant
// [ 'Intello', 20 ]
// [ 'Moyen', 10 ]
// [ 'Cancre', 3 ]
```

Puisqu'une map est itérable, on peut faire ça :
```js
const myEntries = [...myMap] // […[key, value]]
const myEntries = [...myMap.entries()] // alternativement

const myKeys = [...myMap.keys()];
const myValues = [...myMap.values()];
```

On peut également utiliser les méthodes comme `size()` `delete()` et `clear()`.

### Difference avec un objet

*Bon t'es bien gentil mais en quoi est-ce que c'est différent d'un objet ?*
La différence avec un objet, c'est que n'importe quelle valeur peut être utilisée comme clé.

Avec un objet :
```js
const players = {
  { prenom: 'Michael', numero: 23 } : 1, // SyntaxError: Unexpected token {
  { prenom: 'Lebron', numero: 23 } : 2 // SyntaxError: Unexpected token {
}

console.log(players)
```

Avec `Map` : 

```js
const jordan = { prenom: 'Michael', numero: 23 }
const james = { prenom: 'Lebron', numero: 23 }

const players = new Map([[jordan, 1], [james, 2]])

console.log(players)
// Map {
//   { prenom: 'Michael', numero: 23 } => 1,
//   { prenom: 'Lebron', numero: 23 } => 2 }
```

### Metadata

>On veut stocker des [métadonnées](http://eduscol.education.fr/numerique/dossier/archives/metadata/metadonnees) pas forcément sur l'objet mais à propos de l'objet

Use case avec manipulation du DOM:
```html
<style>
    button {
      font-size: 50px;
      margin:10px;
    }
</style>

<button>Snakes 🐍</button>
<button>Cry 😂</button>
<button>Ice Cream 🍦</button>
<button>Flamin' 🔥</button>
<button>Dancer 💃</button>
```

On compte le nombre de fois que l'on a cliqué sur un tel ou tel button :
```js
const clickCounts = new Map()
const buttons = document.querySelectorAll('button')

function addClickCount() {
  const val = clickCounts.get(this)
  clickCounts.set(this, val + 1)
  console.log(clickCounts)
}

buttons.forEach(button => {
    clickCounts.set(button, 0)
    button.addEventListener('click', addClickCount)
})
```

## WeakMap

Très similaire à `WeakSet`, une `WeakMap`. Elle n'as pas de taille, n'est pas itérable, on ne peut pas la parcourir et elle ne garde pas les données "oubliées".

Elle aussi, n'accepte que les objets : 
```js
const myWeakMap = new WeakMap()
myWeakMap.set('Number one', 1) // TypeError: Invalid value used as weak map key
```

Vous n'avez pas besoin de faire du *"baby-sitting"* contrairement à une Map :
```js
let dog1 = { name: 'Snickers' }
let dog2 = { name: 'Sunny' }

const strong = new Map()
const weak = new WeakMap()

strong.set(dog1, 'Snickers is the best!')
weak.set(dog2, 'Sunny is the 2nd best!')

dog1 = null
dog2 = null

console.log(strong) // Map { { name: 'Snickers' } => 'Snickers is the best!' }
console.log(weak) // WeakMap {}
```

## Liens utiles
- [maps-weakmaps](http://putaindecode.io/fr/articles/js/es2015/maps-weakmaps/)