let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
    let email = document.querySelector('#email')
    let labelemail = document.querySelector('#labelemail')
    
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    
    let msgError = document.querySelector('#msgError')
    let listaUser = []
    
    let userValid = {
      nome: '',
      user: '',
      senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    //varrer a lista de user item por item
    listaUser.forEach((item) => {
      if(email.value == item.userCad && senha.value == item.senhaCad){
        //incrementar 
        userValid = {
           nome: item.nomeCad,
           user: item.userCad,
           senha: item.senhaCad
         }
        
      }
    })
     
    if(email.value == userValid.user && senha.value == userValid.senha){
      window.location.href = 'http://127.0.0.1:5501/telaperfil-tina.html'
      msgNaoEncontrado.setAttribute('style', 'display: none')
      
      //gerar um tolken para garantir o login
      let mathRandom = Math.random().toString(16).substr(2)
      let token = mathRandom + mathRandom 
      
      localStorage.setItem('token', token)
      
    } else {
      labelemail.setAttribute('style', 'color: red')
      email.setAttribute('style', 'border-color: red')
      senhaLabel.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')
      msgNaoEncontrado.setAttribute('style', 'display: block')
      msgNaoEncontrado.innerHTML = 'Usuário ou senha incorretos. Tente novamente'

    }
    
  }