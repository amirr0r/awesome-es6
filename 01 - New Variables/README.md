# [`VAR`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/var), [`LET`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let) & [`CONST`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const)

Ok donc pour déclarer des variables, voilà comment on fait :

```js
var myVar
let myLet
const myConst
```

## 1. Quelle est la différence entre les mots clés ```var```, ```let``` et ```const``` ?

- ```let``` :  te permet de modifier, autant de fois que tu le veux, sa valeur.
- ```const``` :  le contraire de let, tu ne pourras pas modifier sa valeur (pas même une seule fois).

```js
const person = "Nick";
person = "John" // Déclenchera une erreur, person ne pouvant pas être réassigné
```

```js
let person = "Nick";
person = "John";
console.log(person) // "John", le réassignement est permis avec let
```

## 2.  Pourquoi ne pas utiliser ```var``` ?

C'est une histoire de **scope** mon gars ! Le **scope** correspond à la portée, le contexte dans lequel des valeurs, expressions sont disponibles, "visibles".

On constate plusieurs comportements anormaux chez ```var```. Parmi lesquels :
```js
var myVar
console.log(myVar) // undefined
var myVar = 12
console.log(myVar) // 12
```

Il devrait y avoir une erreur puisque l'on redéclare `myVar`. Si on avait mis ```let``` :
```js
let myLet
console.log(myLet) // undefined
let myLet = 12 // SyntaxError: Identifier 'myVar' has already been declared
console.log(myLet)
```
On obtient bien une erreur.

Un autre problème :
```js
for (var i = 0; i < 10; i++) { 
    setTimeout(()=> console.log('This number is ' + i), 1000)   
}
This number is 10
This number is 10
This number is 10
This number is 10
This number is 10
This number is 10
This number is 10
This number is 10
This number is 10
This number is 10

```

Alors qu'avec ```let``` : 
```js
for (let i = 0; i < 10; i++) { 
 setTimeout(()=> console.log('This number is ' + i), 1000)   
}
This number is 0
This number is 1
This number is 2
This number is 3
This number is 4
This number is 5
This number is 6
This number is 7
This number is 8
This number is 9
```


Lorsqu'on déclare une variable en dehors des **blocs**, on dit d'elle que c'est une **variable globale**. À l'inverse, lorsqu'elles sont déclarées dans un **sous-bloc**, ce sont des **variables locales**.

- Les **variables globales** sont disponibles à l'intérieur et à l'extérieur de n'importe quel **bloc**.
- Les **variables locales** quand à elles, ne sont disponibles qu'à l'intérieur du **bloc** dans lequel elles ont été déclarées. Et par extension, dans tous les **sous-blocs** de ce **bloc**.

Pourtant ```var``` semble être tout le temps **globale** :
```js
var age = 42 // ici age est une variable globale
if (age > 12) {
    var dogYears = age * 7 // ici gogYears est une variable locale
    console.log('You are ' + dogYears + ' dog years old') // You are 294 dog years old
}
console.log(dogYears) // 294 
if (dogYears > 45) { // on rentre dans la condition
    console.log("You're an old person") // You're an old person
}
```

Alors que ```let``` :
```js
let age = 42
if (age > 12) {
    let dogYears = age * 7
    console.log('You are ' + dogYears + ' dog years old')
}
console.log(dogYears) // ReferenceError: dogYears is not defined
if (dogYears > 45) { 
    console.log("You're an old person")
}
```

Toutefois, il y a des choses qui ne changent pas :
```js
    // que ce soit var, let ou const
var bool = false
function test() { // on verra les arrow functions plus tard
 var bool = true 
}
test()
console.log(bool) // false
```

Enfin, il y a ce qu'on appel la [*Temporal dead zone*](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone) ou *TDZ* :
```js
console.log(pizza) // undefined
var pizza = '4 fromages'

console.log(pizza) // ReferenceError: pizza is not defined
let pizza = '4 fromages'
```

# **CONCLUSION**

J'utilise ```const``` par défaut, ```let``` si j'en ai vraiment besoin et jamais ```var```
