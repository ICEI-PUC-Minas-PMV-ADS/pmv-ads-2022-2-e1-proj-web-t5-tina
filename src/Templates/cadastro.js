function salvaCadastro (event) {
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados do formulário
    let nome   = document.getElementById('nome').value;
    let email  = document.getElementById('email').value;
    let senha  = document.getElementById('senha').value;
    let senha2 = document.getElementById('confirmsenha').value;
    if (senha != senha2) {
        alert ('As senhas informadas não conferem.');
        return
    }

    // Adiciona o usuário no banco de dados
    addUser (nome, senha, email);
    alert ('Usuário salvo com sucesso. Proceda com o login para ');
}
function acessarTelaLogin() {
    return window.location.href = 'login.html'
}

// Associar salvamento ao botao
document.getElementById ('cadastrar').addEventListener('click', salvaCadastro);
document.getElementById ('cadastrar').addEventListener('click', acessarTelaLogin);
