# Symbols

Un symbol, un peu comme un *hash*, est un type de données unique et inchangeable. Généralement, il est utilisé pour représenter des identifiants pour des propriétés d'un objet. Ce qui suit n'est qu'un grossier résumé de cet [article](http://putaindecode.io/fr/articles/js/es2015/symbols/).

# Créer un symbol

La fonction `Symbol()` permet de créer de nouveaux symboles :
```js
// Un symbol tout bête
const mySymbol = Symbol()
typeof mySymbol === "symbol" // true

// Un symbol avec une description
const myOtherSymbol = Symbol("description")

// Chaque symbole est unique
const yetAnotherSymbol = Symbol("description")
yetAnotherSymbol === myOtherSymbol; // false
```

Chaque symbole créé avec `Symbol` est unique et immutable. Cela permet d'éviter les collisions : on ne peut pas avoir deux symboles identiques par erreur.

## Enum à l'aide des Symbols
Si tu viens de JAVA ou du C, tu peux avoir envie de faire des **enums**. Avec tu peux le faire de cette manière : 

```js
const LUNDI = Symbol();
const SAMEDI = Symbol();

const getDescription = (jour) => {
  switch (jour) {
    case LUNDI:
      return "Hmmm.. le Lundi c'est dur de se lever";
    case SAMEDI:
      return "Hey, c'est le week end";
  }
}
```

## Identifiants uniques

Grâce à l'unicité des symboles, plus de problèmes de collision entre les clés d'un objet.

Attention, les propriétés indexées par des symboles sont listées seulement par `Object.getOwnPropertySymbols` et elles sont ignorées par `JSON.stringify`.

```js
const myObject = {
  [Symbol()]: "symbol-keyed value",
  key: "string-keyed value"
}

Object.keys(myObject) // [ 'key' ]
Object.getOwnPropertyNames(myObject) // [ 'key' ]
Object.getOwnPropertySymbols(myObject) // [ Symbol() ]

JSON.stringify({
  [Symbol()]: "symbol-keyed value",
  key: "string-keyed value"
}) // '{"key":"string-keyed value"}'
```

Une fois créé, il est impossible d'en créér un autre ayant les mêmes propriétés. Il faut donc que le symbole créé soit accessible d'une manière ou d'une autre pour pouvoir l'employer. Pour celà, on utilise `Symbol.for`.

```js
console.log(Symbol("mySymbol") === Symbol("mySymbol")) // false
console.log(Symbol("mySymbol") == Symbol("mySymbol")) // false

// Renvoie un symbole, en le créant s'il n'existe pas déjà
const mySymbol = Symbol.for("mySymbol")
console.log(mySymbol === Symbol.for("mySymbol")) // true

// Il est possible de récupérer la clé avec laquelle un symbole a été inséré
// dans le registre
Symbol.keyFor(mySymbol); // 'mySymbol'

// Un symbole non créé dans le registre n'est pas disponible
Symbol.keyFor(Symbol()); // undefined
```

>Au fait, l'itérateur d'un objet employé par `for..of` est une propriété qui a pour clé un symbole, accessible via `Symbol.iterator`.

