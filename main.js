let button = document.querySelector('button')
button.addEventListener('click', convert)

function convert() {
    let originalTitle = document.querySelector('input').value
    let title = originalTitle.toLowerCase()
    // .replaceAll(' ', '')
    title = title.replace(/[^a-z0-9\s]/g, '')
    
    let arr = title.split(' ').filter(word => word !== '')
    // arr = arr.replaceAll(' ', '')
    let newTitle = arr.join('-')
    newTitle = newTitle + '.js'
    document.querySelector('h3').innerHTML = originalTitle
    document.querySelector('h4').innerHTML = newTitle 

    console.log(arr)
   
}
