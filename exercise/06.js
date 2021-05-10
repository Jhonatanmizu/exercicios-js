function jurossimples(capitalinicial, taxa, tempo){
console.log(capitalinicial + (capitalinicial * taxa * tempo))
}
function juroscomposto(capitalinicial, taxa, tempo){
console.log(capitalinicial * (1 + taxa) ** tempo)
}
jurossimples(100,10,12)
juroscomposto(15,12,5)