
let btn = document.querySelector('.fa-eye')
let btnSenha = document.querySelector('#ver-nova')
let btnConfirm = document.querySelector('#ver-confirm-senha')

let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validnome = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelemail')
let validemail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let labelconfirm = document.querySelector('#labelconfirm')
let validconfirm = false

let msgerror = document.querySelector('#msgerror')
let msgsuccess = document.querySelector('#msgsuccess')

nome.addEventListener("keyup", () => {
    if (nome.value.length <= 10) {
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'Nome completo: *Insira no minimo 10 caracteres'
        // nome.setAttribute('style', 'border-color: red')
        validnome = false
    } else {
        labelnome.setAttribute('style', 'color: green')
        labelnome.innerHTML = 'Nome completo:'
        // nome.setAttribute('style', 'border-color: green')
        validnome = true
    }
})

email.addEventListener("keyup", () => {
    if (email.value.indexOf(".com", "@") <= 1) {
        labelemail.setAttribute('style', 'color: red')
        labelemail.innerHTML = 'E-mail: *Insira um e-mail válido'
        // nome.setAttribute('style', 'border-color: red')
        validemail = false
    } else {
        labelemail.setAttribute('style', 'color: green')
        labelemail.innerHTML = 'E-mail:'
        // nome.setAttribute('style', 'border-color: green')
        validemail = true
    }
})

senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no mínimo 5 caracteres'
        // nome.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha:'
        // nome.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

confirmsenha.addEventListener("keyup", () => {
    if (senha.value != confirmsenha.value) {
        labelconfirm.setAttribute('style', 'color: red')
        labelconfirm.innerHTML = 'Confirmar Senha *As senhas não conferem'
        // nome.setAttribute('style', 'border-color: red')
        validconfirm = false
    } else {
        labelconfirm.setAttribute('style', 'color: green')
        labelconfirm.innerHTML = 'Confirmar Senha *correto'
        // nome.setAttribute('style', 'border-color: green')
        validconfirm = true
    }
})

function cadastrar() {
    if (validnome && validSenha && validconfirm && validemail) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[ ]')

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        listaUser.push(
            {
              nomeCad: nome.value,
              userCad: email.value,
              senhaCad: senha.value
            }
            )
            
            localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgsuccess.setAttribute('style', 'display: block')
        msgsuccess.innerHTML = "<strong>Cadastrando o usuário...</strong>"
        msgerror.innerHTML = " "
        msgerror.setAttribute('style', 'display: none')

        window.location.href = 'http://127.0.0.1:5501/template-tina-login.html'


    } else {
        msgerror.setAttribute('style', 'display: block')
        msgerror.innerHTML = "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>"
        msgsuccess.innerHTML = " "
        msgsuccess.setAttribute('style', 'display: none')
    }
}


//exibir a senha no icone olho
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  })

//exibir a senha no icone olho
btnConfirm.addEventListener('click', ()=>{
    let inputConfirm = document.querySelector('#confirmsenha')
    
    if(inputConfirm.getAttribute('type') == 'password'){
      inputConfirm.setAttribute('type', 'text')
    } else {
      inputConfirm.setAttribute('type', 'password')
    }
  })

listaUser = JSON.parse(localStorage.getItem('listaUser'))

console.log(listaUser)



