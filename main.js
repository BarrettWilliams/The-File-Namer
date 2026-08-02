let button = document.querySelector('button')
button.addEventListener('click', convert)

function convert() {
    let originalTitle = document.querySelector('input').value
    let title = originalTitle.toLowerCase()
    
    let arr = title.split(' ')
    let newTitle = arr.join('-')
    newTitle = newTitle + '.js'
    document.querySelector('h3').innerHTML = originalTitle
    document.querySelector('h4').innerHTML = newTitle 
   
}
