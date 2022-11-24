function salvaCadastro (event) {
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados do formulário
    let nome   = document.getElementById('nome').value;
    let email  = document.getElementById('email').value;
    let senha  = document.getElementById('senha').value;
    let senha2 = document.getElementById('confirmsenha').value;
   
    if (nome.length <= 4) {
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'Nome completo: *Insira no minimo 5 caracteres'
        // return
    } else {
        labelnome.setAttribute('style', 'color: green')
    }

    if (email.indexOf(".com", "@") <= 1) {
        labelemail.setAttribute('style', 'color: red')
        labelemail.innerHTML = 'E-mail: *Insira um e-mail válido'

    } else {
        labelemail.setAttribute('style', 'color: green')
    }

    if (senha != senha2) {
        labelconfirm.setAttribute('style', 'color: red')
        labelconfirm.innerHTML = 'Confirmar Senha *As senhas não conferem'
        return
    } else {
        labelconfirm.setAttribute('style', 'color: green')
        labelSenha.setAttribute('style', 'color: green')
    
        labelconfirm.innerHTML = 'Confirmar Senha *correto'
    }

    if (nome != '' && email != '' && senha != '' && senha2 != '') {
        // Adiciona o usuário no banco de dados
        addUser (nome, senha, email);
        alert ('Usuário salvo com sucesso. Proceda com o login');
    } else {
        alert("Preencha todos os campos corretamente antes de prosseguir")
        labelconfirm.setAttribute('style', 'color: red')
        labelSenha.setAttribute('style', 'color: red')
        labelconfirm.innerHTML = 'Confirmar Senha'
    }

}
function acessarTelaLogin() {
    return window.location.href = 'login.html'
}

  // Associar salvamento ao botao
  document.getElementById ('cadastrar').addEventListener('click', salvaCadastro);

  //Visualizar senha
// let btn = document.querySelector('.fa-eye')

// btn.addEventListener('click', ()=>{
//   let inputSenha = document.querySelector('#senha')
  
//   if(inputSenha.getAttribute('type') == 'password'){
//     inputSenha.setAttribute('type', 'text')
//   } else {
//     inputSenha.setAttribute('type', 'password')
//   }
// })