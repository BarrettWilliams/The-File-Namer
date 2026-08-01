let button = document.querySelector('button')
button.addEventListener('click', convert)

function convert() {
    let title = document.querySelector('input').value.toLowerCase()
    
    let arr = title.split(' ')
    let newTitle = arr.join('-')
    newTitle = newTitle + '.js'
    document.querySelector('h3').innerHTML = newTitle
   
}
