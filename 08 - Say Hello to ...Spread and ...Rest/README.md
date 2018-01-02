# [`Spread Operator`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateur_de_d%C3%A9composition) & [`Rest param`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/param%C3%A8tres_du_reste)

Le `...`, peut s'avérer très utile :

## `Spread Operator`

### Arrays

#### Reference 
```js
const commande = ["Margarita", "4 fromages"]
const commandeRef = commande

commandeRef[0] = "Oriental"

console.log(commandeRef) // [ 'Oriental', '4 fromages' ]
console.log(commande) // [ 'Oriental', '4 fromages' ]
```

#### Copy 
```js
const commande = ["Margarita", "4 fromages"]
const commandeCopie = [...commande]

commandeCopie[0] = "Margarita"

console.log(commandeCopie) // [ 'Margarita', '4 fromages' ]
console.log(commande) // [ 'Oriental', '4 fromages' ]
```

```js
const commandeTable1 = ["Margarita", "4 fromages"]
const commandeTable2 = ["Panini Thon", "Frites"]

// Si pensais pouvoir faire comme ça :
Array.from(commandeTable1, commandeTable2)// TypeError: [object Array] is not a function
// ou ça :
console.log(Array.from(commandeTable1 + commandeTable2))
// [ 'M',
//   'a',
//   'r',
//   'g',
//   'a',
//   'r',
// ...
//   's' ]
let commandes = [...commandeTable1, ...commandeTable2]
console.log(commandes) // [ 'Margarita', '4 fromages', 'Panini Thon', 'Frites' ]
commandes = [...commandeTable1, 'Eau', ...commandeTable2] 
console.log(commandes) // [ 'Margarita', '4 fromages', 'Eau', 'Panini Thon', 'Frites' ]
```
### Objects

#### Reference
```js
const amir2017 = person
amir2017.age++
console.log(amir2017) // { name: 'amir', age: 20 }
console.log(person) // { name: 'amir', age: 20 }
```

#### Copy 
```js
const person = {
    name: 'amir',
    age: 19
}

const amir = {...person}
amir.age++
console.log(amir) // { name: 'amir', age: 20 }
console.log(person) // { name: 'amir', age: 19 }
```

## `Rest param`

Le `...` n'est pas forcément le `Spread Operator`, il peut également s'agir du `Rest param`. 

Contrairement au `Spread Operator` qui prend un itérable (array par exemple) et extrait ses éléments, le `Rest param` lui, récupère plusieurs éléments et les stocke dans un tableau.
```js
const convertitMonnaie = (taux, ...montants) => montants.map(montant => montant * taux)
// dans la fonction montants devient un tableau [ 10, 23, 52, 1, 56 ]

const monnaiesConvertis = convertitMonnaie(1.54, 10, 23, 52, 1, 56)
console.log(monnaiesConvertis) // [ 15.4, 35.42, 80.08, 1.54, 86.24000000000001 ]
```

On l'utilise aussi pour déstructurer :
```js
const equipe = ['Jordan', 'Wade', 'Curry', 'Chamberlain', 'Bryant']
const [capitaine, assistant, ...joueurs] = equipe
console.log(capitaine, assistant, joueurs)
// Jordan Wade [ 'Curry', 'Chamberlain', 'Bryant' ]
console.log(capitaine, assistant, ...joueurs)
// Jordan Wade Curry Chamberlain Bryant
```
