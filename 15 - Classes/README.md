# Classes

>J'estime que tu as déjà des bases en programmation orientée objet.

Il faut savoir que le JS est un langage [orientée prototype](https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_prototype).
Ce qui est assez drôle puisque je peux très bien faire ça :
```js
// cette fonction agit comme un constructeur
function Car(marque, couleur) { 
  this.marque = marque
  this.couleur = couleur
}
// j'instancie deux voitures
const merco = new Car('Mercedes', 'Grey')
const lambo = new Car('Lambo', 'White')
// j'ajoute le prototype de fonction description 
Car.prototype.description = function(){
 console.log(this.marque + ' ' + this.couleur) 
}
// même si j'ai ajouté la fonction après avoir instanciés deux voitures 
merco.description() // Mercedes Grey
lambo.description() // Lambo White
```

Toutefois il vaut mieux utiliser le mot clé `class` :
```js
class Car {
    constructor(marque, couleur) { 
      this.marque = marque
      this.couleur = couleur
    }
    description() {
     console.log(this.marque + ' ' + this.couleur) 
    }
}
const merco = new Car('Mercedes', 'Grey')
const lambo = new Car('Lambo', 'White')
merco.description() // Mercedes Grey
lambo.description() // Lambo White
```

## Getters & Setters

On ajoute des `setters` de cette manière :
```js
// ...
class Car {
    constructor(marque, couleur) { 
      this.marque = marque
      this.couleur = couleur
    }
    description() {
     console.log(this.marque + ' ' + this.couleur) 
    }
    // ce setter modifie l'attribut model et l'ajoute s'il n'existe pas
    set modele(year){
      // .trim() enleve les espaces blancs du debut et de la fin de la chaine
      this.model = year.trim() 
      // j'ai mis model car si j'avais mis modele, il y aurait eu une erreur
    }
    set color(c) { // si j'avais mis set couleur(c)
    // j'aurais eu : RangeError: Maximum call stack size exceeded
      this.couleur = c.trim()
    }
}
const merco = new Car('Mercedes', 'Grey')
// voilà comment on appelle le setter
merco.modele = '             2017'
console.log(merco) //Car { marque: 'Mercedes', couleur: 'Grey', model: '2017' }
```

Si je n'avais pas défini de `setter` :
```js
merco.modele = '             2017'
console.log(merco.modele) //             2017
console.log(merco)
// Car {
//   marque: 'Mercedes',
//   couleur: 'Grey',
//   modele: '             2017' }
```

Pour récupérer le modele, vous remarquerez que :
```js
// ... 
merco.modele = '    2017    '
console.log(merco.modele) // undefined
console.log(merco.model) // 2017
```

J'ai donc besoin d'un `getter` :
```js
class Car {
    constructor(marque, couleur) { 
      this.marque = marque
      this.couleur = couleur
    }
    description() {
     console.log(this.marque + ' ' + this.couleur) 
    }
    set modele(year){
      this.model = year.trim() 
    }
    set color(c) {
      this.couleur = c.trim()
    }
    // j'ajoute mon getter
    get modele() {
      return this.model
    }
}
const merco = new Car('Mercedes', 'Grey')
merco.modele = '    2017    '
console.log(merco.modele) // 2017
console.log(merco.marque) // Mercedes -> pas besoin de getter
```

Tu peux très bien faire ça, si tu préfères :
```js
class Car {
// ...
    setCouleur(color) {
      this.couleur = color
    }
// ...
}
const merco = new Car('Mercedes', 'Grey')
merco.setCouleur('Blue')
console.log(merco.couleur) // Blue
```

## Héritage

En ce qui concerne l'héritage :
```js
class Animal {
  constructor(name) {
    this.name = name
    this.soif = 100
    this.estomac = []
  }
  drink() {
    this.soif -= 10
    return this.soif
  }
  eat(food) {
    this.estomac.push(food)
    return this.estomac
  }
}

class Dog extends Animal {
  constructor(name, race) {
    super(name)
    this.race = race
  }
  waf() {
    console.log('Waf Waf I\'m a dog')
  }
}

const rhino = new Animal('Rhiney')
const snickers = new Dog('Snickers', 'King Charles')
rhino.eat('herbe')
rhino.drink()
console.log(rhino) 
// Animal { name: 'Rhiney', soif: 90, estomac: [ 'herbe' ] }
snickers.eat('os')
console.log(snickers) 
// Dog { name: 'Snickers', soif: 100, estomac: [ 'os' ], race: 'King Charles' }
```

> Toujours mettre le `super()` quand on étend une classe.

### Abstract Class

Si tu viens de Java, tu dois vouloir faire des `Abstract Class`. Faisons preuve d'ingéniosité, admettons que l'on ne veut pas instancier la classe Animal :
```js
class Animal {
  constructor(name) {
    this.name = name
    this.soif = 100
    this.estomac = []
    if (new.target === Animal) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }
  drink() {
    this.soif -= 10
    return this.soif
  }
  eat(food) {
    this.estomac.push(food)
    return this.estomac
  }
}

class Dog extends Animal {
  constructor(name, race) {
    super(name)
    this.race = race
  }
  waf() {
    console.log('Waf Waf I\'m a dog')
  }
}
const rhino = new Animal('Rhiney') // TypeError: Cannot construct Abstract instances directly
const snickers = new Dog('Snickers', 'King Charles')
snickers.eat('croquette')
snickers.drink()
snickers.drink()
console.log(snickers) 
// Dog { name: 'Snickers', soif: 80, estomac: [ 'croquette' ], race: 'King Charles' }
```

### Static methods

J'imagine que tu connais les méthodes statiques, en JS elles ne peuvent s'appliquer que sur la super classe (classe Mère)
```js
class Dog {
    // ...
    static info() {
      console.log('A dog is better than a cat by 10 times');
    }
    // ...
}
const snickers = new Dog('Snickers', 'King Charles')
snickers.info() // TypeError: snickers.info is not a function
Dog.info() // A dog is better than a cat by 10 times
```

>Il faut également savoir que tout est objet, on très bien `extends Array` par exemple. Je vous laisse vos propres tests ;)