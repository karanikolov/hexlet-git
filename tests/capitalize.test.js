import capitalize from '../capitalize.js'
if (capitalize('hello') !== 'Hello') {
    return ('Функция работает неверно!');
}

if (capitalize('') !== '') {
    return ('Функция работает неверно!');
}

console.log('Все тесты пройдены!');