Le `Spread Operator` ou `...`, peut s'avérer très utile :

## Arrays
```js

const commande = ["Margarita", "4 fromages"]
const commandeRef = commande
commandeRef[0] = "Oriental"
console.log(commandeRef) // [ 'Oriental', '4 fromages' ]
console.log(commande) // [ 'Oriental', '4 fromages' ]

const commandeCopie = [...commande]
commandeCopie[0] = "Margarita"
console.log(commandeCopie) // [ 'Margarita', '4 fromages' ]
console.log(commande) // [ 'Oriental', '4 fromages' ]

const commandeTable1 = ["Margarita", "4 fromages"]
const commandeTable2 = ["Panini Thon", "Frites"]
let commandes = [...commandeTable1, ...commandeTable2]
console.log(commandes) // [ 'Margarita', '4 fromages', 'Panini Thon', 'Frites' ]
commandes = [...commandeTable1, 'Eau', ...commandeTable2] 
console.log(commandes) // [ 'Margarita', '4 fromages', 'Eau', 'Panini Thon', 'Frites' ]

// Si pensais pouvoir faire comme ça :
Array.from(commandeTable1, commandeTable2)// TypeError: [object Array] is not a function
console.log(Array.from(commandeTable1 + commandeTable2))
// [ 'M',
//   'a',
//   'r',
//   'g',
//   'a',
//   'r',
//   'i',
//   't',
//   'a',
//   ',',
//   '4',
//   ' ',
//   'f',
//   'r',
//   'o',
//   'm',
//   'a',
// ...
//   's' ]
```

Le `...` n'est pas forcément le `Spread Operator`, il peut également s'agir du `Rest param`. Contrairement au `Spread Operator` qui prend un itérable (array par exemple) et extrait ses éléments, le `Rest param` récupère plusieurs éléments et les stocke dans un tableau.

```js
const convertitMonnaie = (taux, ...montants) => // montants = [ 10, 23, 52, 1, 56 ]
    montants.map(montant => montant * taux)

const montants = convertitMonnaie(1.54, 10, 23, 52, 1, 56)
console.log(montants) // [ 15.4, 35.42, 80.08, 1.54, 86.24000000000001 ]
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

## Objects

```js
const person = {
    name: 'amir',
    age: 19
}

const amir = {...person}
amir.age++
console.log(amir) // { name: 'amir', age: 20 }
console.log(person // { name: 'amir', age: 19 }

const amir2017 = person
amir2017.age++
console.log(amir2017) // { name: 'amir', age: 20 }
console.log(person) // { name: 'amir', age: 20 }
```
