Tout ceci n'est pas forcément présent depuis ES6, mais c'est utile donc tiens :

[Method](https://github.com/nan-ci/js-methods)

Ok, alors si toi aussi tu t'es déjà *pourquoi est-ce qu'il y a un ```===``` en JS ?* 

En gros, il y a deux opérateurs de comparaison :

- comparaison strict (```===```)
- comparaison d'égalité faible (```==```)

Le ```===``` ne renvoie ```true``` que si les deux opérandes sont du même type.

```js
3 === 3   // true
3 === '3' // false
3 !== '3' // true

0 === false // false
0 === null // false
0 === undefined // false
null === undefined // false
```

Le ```==``` convertie les deux opérandes s'ils ne sont pas du même type.

```js
3 == 3   // true
3 == '3' // true
3 != '3' // false

0 == false // true
0 == null // false
0 == undefined // false
null == undefined // true
```
Pour approfondir :

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
[Stack Overflow](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons/)