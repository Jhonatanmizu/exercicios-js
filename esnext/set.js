// não aceita repetição nem é indexido
const times = new Set()
times.add('Vasco')
times.add('São paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')
console.log(times)
console.log(times.has('Vasco'))

const music = ['open', 'die','for','you']
const musicSet = new Set(music)
console.log(musicSet)
