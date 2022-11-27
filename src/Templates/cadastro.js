

function salvaCadastro (event) {
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados do formulário
    let nome   = document.getElementById('nome').value;
    let validNome = false

    let email  = document.getElementById('email').value;
    let validEmail = false
    var validEmailRepetido = true 

    let senha  = document.getElementById('senha').value;
    let validSenha = false

    let senha2 = document.getElementById('confirmsenha').value;
   
    if (nome.length <= 4) {
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'Nome completo: *Insira no minimo 5 caracteres'
        validNome = false
    } else {
        labelnome.setAttribute('style', 'color: green')
        validNome = true
    }

    if (email.indexOf(".com", "@") <= 1) {
        labelemail.setAttribute('style', 'color: red')
        labelemail.innerHTML = 'E-mail: *Insira um e-mail válido'
        validEmail = false
    } else {
        labelemail.setAttribute('style', 'color: green')
        validEmail = true
        
        var usuariosJSON = localStorage.getItem('db_usuarios');
        db_usuarios = JSON.parse(usuariosJSON);    
    
        for(var i = 0; i < db_usuarios.usuarios.length; i++) {
            var usuario = db_usuarios.usuarios[i];
  
        var controlador = 0
    
         if (email == usuario.email) {
            controlador++
        } 
    
        if (controlador != 0) {
            alert ('E-mail já cadastrado. Tente novamente ou prossiga para o login');
            validEmailRepetido = false
        }}
    }

    if (senha != senha2) {
        labelSenha.setAttribute('style', 'color: red')
        labelconfirm.setAttribute('style', 'color: red')
        labelconfirm.innerHTML = 'Confirmar Senha *As senhas não conferem'
        validSenha = false
    } else {
        labelconfirm.setAttribute('style', 'color: green')
        labelSenha.setAttribute('style', 'color: green')
        labelconfirm.innerHTML = 'Confirmar Senha *correto'
        validSenha = true
    }

     if ((nome != '' && email != '' && senha != '' && senha2 != '') && (validNome && validEmail && validSenha && validEmailRepetido)) {
        // Adiciona o usuário no banco de dados
        addUser (nome, senha, email);
        alert ('Usuário salvo com sucesso. Proceda com o login');
        window.location.href = 'login.html'
    } else {
        alert("Preencha todos os campos corretamente antes de prosseguir")
    }
}

function acessarTelaLogin() {
    return window.location.href = 'login.html'
}
  // Associar salvamento ao botao
  document.getElementById('cadastrar').addEventListener('click', salvaCadastro);