Souvent on se retrouve avec des *NodeList* ou *Object* et on est bien embêté parqu'ils n'implémentent pas les méthodes tels [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) ...

```html
<div class="people">
    <p>Eliot</p>
    <p>Adam</p>
    <p>Ines</p>
</div>
```

```js
const people = document.querySelectorAll('.people > p') // NodeList
```
![NodeList](NodeList.png)

On peut convertir ces structures en tableau (array) de deux manières différentes.

```js
// 1
Array.from(people) // Array
// 2
[...people] // Array
```

L'avantage avec ```Array.from```, c'est qu'il est plus facilement compréhensible par vos pairs et qu'il peut prendre une fonction **map** en second argument :

```js
Array.from(people, person => person.textContent) // ["Eliot", "Adam", "Ines"]
```

Il y a également la méthode ```Array.of``` qui créée simplement un tableau à partir des arguments que vous lui donnez :
```js
Array.of(1, 2, 3, 4) // [ 1, 2, 3, 4 ]
```

Il y a d'autres méthodes intéressantes mais je te laisse les découvrir : 
- [`Array.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`Array.findIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [`Array.some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [`Array.every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

... et les incontournables :

![map-filter-reduce-in-emoji](map-filter-reduce-in-emoji-1.png)
