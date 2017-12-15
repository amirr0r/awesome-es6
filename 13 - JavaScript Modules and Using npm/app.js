import {sum, sub} from './math'

const sumResult = document.querySelector('#sum')
const subResult = document.querySelector('#sub')

sumResult.textContent = `Le résultat de 2 + 2 : ${sum(2, 2)}`
subResult.textContent = `Le résultat de 2 - 2 : ${sub(2, 2)}`