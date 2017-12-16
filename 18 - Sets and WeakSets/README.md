# [`Sets`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set) & [`WeakSets`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakSet)

## Set

>Si tu viens de Java tu dois connaître les Sets

Concrètement `Set` c'est comme un tableau, une liste, qui ne contient qu'une et une seule fois chaque valeur.

Quelques méthodes utiles :


- `add()`
```js
const students = new Set()

students.add('Antoine')
students.add('Bineta')
students.add('Idriss')

console.log(students) // Set { 'Antoine', 'Bineta', 'Idriss' }
students.add('Idriss') // Idriss n'est pas ajouté, il est déjà dans students
console.log(students) // Set { 'Antoine', 'Bineta', 'Idriss' }
```

- `has()`
```js
const students = new Set(['Antoine', 'Bineta', 'Idriss'])
console.log(students.has('Romain')) // false
console.log(students.has('Bineta')) // true
```

- `size` et pas `length`
```js
const students = new Set(['Antoine', 'Bineta', 'Idriss'])
console.log(students.size) // 3
```

- `delete()`
```js
const students = new Set(['Antoine', 'Bineta', 'Idriss'])
students.delete('Antoine')
console.log(students) // Set { 'Bineta', 'Idriss' }
```

- `clear()`
```js
const students = new Set(['Antoine', 'Bineta', 'Idriss'])
students.clear()
console.log(students) // Set {}
```

Pour parcourir un `Set` :
```js
const students = new Set(['Antoine', 'Bineta', 'Idriss'])
for (const student of students) {
  console.log(student)
}
// Antoine
// Bineta
// Idriss
```

- `values()`
```js
const students = new Set(['Antoine', 'Bineta', 'Idriss'])
console.log(students.values()) // SetIterator { 'Antoine', 'Bineta', 'Idriss' }

```

- `keys()` pas de différence avec le précédent :
```js
const students = new Set(['Antoine', 'Bineta', 'Idriss'])
console.log(students.keys()) // SetIterator { 'Antoine', 'Bineta', 'Idriss' }
```

- `entries()`
```js
const students = new Set(['Antoine', 'Bineta', 'Idriss'])
console.log(students.entries())
// SetIterator {
//   [ 'Antoine', 'Antoine' ],
//   [ 'Bineta', 'Bineta' ],
//   [ 'Idriss', 'Idriss' ] }
```

## WeakSet

C'est la même chose qu'un Set, seulement il ne peut contenir que des objets et on ne peut pas le parcourir. Il n'y a pas de clear() -> garbage COLLECTOR