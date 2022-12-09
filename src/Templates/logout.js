

//logout
function initPage() {
    //    Associa a função de logout ao botão
        document.getElementById('btnLogout').addEventListener('click', logoutUser);
    }
    
    // Associa ao evento de carga da página a função para verificar se o usuário está logado
    window.addEventListener('load', initPage);

    //Fazer logout
function logoutUser () {
    let sair = confirm('Deseja realmente sair do Tina?')
     if (sair) {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location.href = 'login.html'
     }
}
