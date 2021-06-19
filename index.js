// Write your code here!
const main = document.querySelector('#main')
main.remove()
const body = document.querySelector('body')
const newHeader =  document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "is the champion"
body.appendChild(newheader)