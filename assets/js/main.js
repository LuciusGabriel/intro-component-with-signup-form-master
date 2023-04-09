const firstName = document.querySelector('#first_name')
const firstNameSmall = document.querySelector('.first_name')
const lastName = document.querySelector('#last_name')
const emailAdress = document.querySelector('#email_adress')
const password = document.querySelector('#password')
const buttonSubmit = document.querySelector('#button_submit')


buttonSubmit.addEventListener('click', ()=>{
    if(firstName.value === ''){
        console.log('Campo Primeiro Nome Vazio')
        firstName.classList.add('required')
        firstNameSmall.classList.remove('invisible')
    }
    if(lastName.value === ''){
        console.log('Campo Sobrenome Vazio')
    }
    if(emailAdress.value === ''){
        console.log('Campo Email Vazio')
    }
    if(password.value === ''){
        console.log('Campo Password Vazio')
    }
})