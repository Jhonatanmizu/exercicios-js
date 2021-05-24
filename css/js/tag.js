const colors = {
  p:'#388e3c',
  div: '#4085f8',
  span: 'purple',
  section: '#676767',
  ul:'#581890',
  ol: '#207040',
  nav: '#143569',
  main: '#578843',
  footer: '#577589',
  form: '#157828',
  body: 'red',
  padrao: 'black',
  get(tag){
    return this[tag] ? this[tag] : this.padrao
  }
}

document.querySelectorAll('.tag').forEach( elemento => {
  const tagName = elemento.tagName.toLowerCase()
  elemento.style.borderColor = colors.get(tagName)
  if (!elemento.classList.contains('nolabel')){
    const label = document.createElement('label')
    label.style.backgroundColor =colors.get(tagName)
    label.innerHTML = tagName
    elemento.insertBefore(label, elemento.childNodes[0])
  }
})
