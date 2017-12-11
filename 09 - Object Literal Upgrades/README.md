On note plusieurs améliorations sur les `Objects` . En voici quelques-unes :

##1
Avant ES6 :
```js
const first = 'snickers';
const last = 'bos';
const age = 2;
const breed = 'King Charles Cav';

const dog = {
    first: first,
    last: last,
    age: age,
    breed: breed
}
console.log(dog) // { first: 'snickers', last: 'bos', age: 2, breed: 'King Charles Cav' }
```

Depuis ES6 :
```js
const first = 'snickers';
const last = 'bos';
const age = 2;
const breed = 'King Charles Cav';

const dog = {
    first,
    last,
    age,
    breed
}
console.log(dog) // { first: 'snickers', last: 'bos', age: 2, breed: 'King Charles Cav' }
```

##2
Avant ES6 :
```js
const modal = {
    create: function(selector) {
        //...code
    },
    open: function(content) {
        //...code
    },
    close: function(goodbye) {
        //...code
    }
}
```

Depuis ES6 :
```js
const modal = {
    create(selector) {
        //...code
    },
    open(content) {
        //...code
    },
    close(goodbye) {
        //...code
    }
}
```

##3
Avant ES6:
```js
const keys = ['size', 'color', 'weight']
const values = ['medium', 'red', 100]
const shirt = {
  [keys[0]]: values[0],
  [keys[1]]: values[1],
  [keys[2]]: values[2]
}
console.log(shirt) // { size: 'medium', color: 'red', weight: 100 }
```

Depuis ES6 :
```js
const keys = ['size', 'color', 'weight']
const values = ['medium', 'red', 100]
const shirt = {
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift()
}
console.log(shirt) // { size: 'medium', color: 'red', weight: 100 }
```
