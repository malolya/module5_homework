const map = new Map();
map.set('12', 'name');
map.set('user', 'Olya');
const iterator1 = map.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
