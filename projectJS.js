const regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/
const daysOfWeek = ['monday', 'tuesday', 'wenesday', 'thursday', 'friday']
const info = document.getElementById('inputForm')

info.addEventListener('submit', (event) =>{
    event.preventDefault()
    userName = document.getElementById('name')
    email = document.getElementById('email')

});