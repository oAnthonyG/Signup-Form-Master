const nameInput = document.querySelector('#name')
const lasNameInput = document.querySelector('#lastname')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

const span = document.querySelectorAll('.input-msg-erro')

const submitButton = document.querySelector('.button')

submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    const nameValue = nameInput.value;
    const lasNameValue = lasNameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if(nameValue === ''){
        nameInput.classList.add('error')
        span[0].classList.add('active-error')

        setTimeout(() =>{
            nameInput.classList.remove('error')
            span[0].classList.remove('active-error')
        }, 3000)
        
    }
    if(lasNameValue === ''){
        lasNameInput.classList.add('error')
        span[1].classList.add('active-error')

        setTimeout(() =>{
            lasNameInput.classList.remove('error')
            span[1].classList.remove('active-error')
        }, 3000)
        
        
    }
    if(emailValue === ''){
        emailInput.classList.add('error')
        span[2].classList.add('active-error')

        setTimeout(() =>{
            emailInput.classList.remove('error')
            span[2].classList.remove('active-error')
        }, 3000)
        
        
    }
    if(passwordValue === ''){
        passwordInput.classList.add('error')
        span[3].classList.add('active-error')
        
        setTimeout(() =>{
            passwordInput.classList.remove('error')
            span[3].classList.remove('active-error')
        }, 3000)
        
         
    }
}) 
