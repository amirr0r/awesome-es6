Comment extraire des données d'une structure efficacement ?

## Objects

Admettons que je veuille récupérer les *proprités* de l'objet person :
```js
const person = {
  first: 'Ali',
  last: 'Gator',
  country: 'Canada',
  city: 'Vancouver',
  snapchat: 'aghostor',
  twitter: '@redbull11570'
}
```

Si tu pensais à ça :
```js
const first = person.first
const last = person.last
const twitter = person.twitter
```

Sache que tu peux plutôt l'écrire comme ça :
```js
const { first, last, twitter } = person
```

C'est le même résultat :

```js
console.log(first) // Ali
console.log(last) // Gator
console.log(twitter) // @redbull11570
```

Maintenant si tu veux renommer leurs noms :

```js
const {last: nom, snapchat: snap} = person

console.log(nom) // Gator
console.log(snap) // aghostor

```

Enfin, pour extraire les propriétés d'un *objet* contenu dans un *objet* :
```js
const person = {
  first: 'Ali',
  last: 'Gator',
  country: 'Canada',
  city: 'Vancouver',
  links: {
    social: {
      snapchat: 'aghostor',
      twitter: '@redbull11570',
      facebook: 'https://facebook.com/ali.gator',
    },
    web: {
      blog: 'https://aligator.com'
    }
  }
}


const { snapchat: snap, facebook: fb } = person.links.social
console.log(fb) // https://facebook.com/ali.gator
console.log(snap) // aghostor
```

Ou pour mettre des valeurs par défault : 
```js
const settings = { width: 300, color: 'black' }  // height, fontSize
const { width = 100, height = 100, color = 'blue', fontSize = 25} = settings
// s'il n'y a pas de variable width, il en créé une et l'initiliase à 100
// même chose pour height ...
```
## Arrays

Pour extraire les éléments d'un tableau *array* :
```js
const details = ['amir Barnat', 19, 'amirbarnat.com']
```
Si tu pensais à ça :
```js
const name = details[0]
const age = details[1]
const website = details[2]
```
Tu vas perdre un temps fou, utilise plutôt ça :
```js
const [name, age, website] = details
```

Il y aussi ce qu'on appelle le *rest operator* ```...``` :
```js
const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker']

const [captain, assistant, ...players] = team

console.log(captain) // Wes
console.log(assistant) // Harry
console.log(players) // ['Sarah', 'Keegan', 'Riker']
```

Si tu te souviens bien, dans le **README** sur les *Arrow Functions*. J'utilisais un exemple similaire à celui-ci :

```js
let first = 'Sangoku';
let second = 'Vegeta';

console.log(first, second); // Sangoku Vegeta
[first, second] = [second, first];
console.log(first, second); // Vegeta Sangoku
```


> Ici si je retire le ```;``` j'ai une erreur.

Esssaye de comprendre et de décortiquer ce bout de code :
```js
const tipCalc1 = (myObject) => 
  myObject.total + (myObject.tip * myObject.total) + (myObject.tax * myObject.total)

const tipCalc2 = ({ total = 100, tip = 0.15, tax = 0.13 } = {}) => 
  total + (tip * total) + (tax * total)
  
const obj = { tax: 0.12, tip: 0.20, total: 200 }

const bill1 = tipCalc1(obj)
const bill2 = tipCalc2({ tip: 0.20, total: 200 })
const bill3 = tipCalc2()

console.log(bill1)
console.log(bill2)
console.log(bill3)
```
