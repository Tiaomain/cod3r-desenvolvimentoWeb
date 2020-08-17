// não aceita repetição e não é indexada

const times = new Set()
times.add('Gama')
times.add('Candanga')
times.add('Rec das Emas').add('Guará').add('Santa Maria')
times.add('Gama')

console.log(times);
console.log(times.size);
console.log(times.has('gama'));
console.log(times.has('Gama'));
times.delete('Guará')
console.log(times.has('Guará'));
