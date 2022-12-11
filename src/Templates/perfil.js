
document.querySelector("#nomePerfil").value = usuarioCorrente.nome
document.querySelector("#emailPerfil").value = usuarioCorrente.email
document.querySelector("#senhaPerfil").value = usuarioCorrente.senha
document.querySelector("#confirmSenha").value = usuarioCorrente.senha

var nomePerfil = usuarioCorrente.nome
var emailPerfil = usuarioCorrente.email
var senhaPerfil = usuarioCorrente.senha

console.log(nomePerfil)

function initPage() {
    // Associa a função de logout ao botão
    document.getElementById('btn_logout').addEventListener('click', logoutUser);
}

// Associa ao evento de carga da página a função para verificar se o usuário está logado
window.addEventListener('load', initPage);

///editar cadastro ----------------------------------

function editDados (event) {
    event.preventDefault();

    var usuariosJSON = localStorage.getItem('db_usuarios');
    db_usuarios = JSON.parse(usuariosJSON);    

    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];
     }

var nome = document.getElementById('nomePerfil').value;
var email = document.getElementById('emailPerfil').value;
var senha = document.getElementById('senhaPerfil').value;
var senhaNova = document.getElementById('confirmSenha').value;

if (senha != senhaNova) {
    alert("as senhas não são iguais, tente novamente")
    } else if ((nome!= nomePerfil) || (email!= emailPerfil) || (senha!= senhaPerfil)) {

        
        for (var i = 0; i < db_usuarios.usuarios.length; i++) {
            var usuario = db_usuarios.usuarios[i];
            if (usuario.email == emailPerfil) {
                usuario.email = email;
                break;
            }
            
            if (usuario.nome == nomePerfil) {
                usuario.nome = nome;
                break;
            }

            if (usuario.senha == senhaPerfil) {
                usuario.senha = senha;
                break;
            }
        }

        console.log(usuario.email); 

    usuario.nome = nome
    usuario.email = email
    usuario.senha = senha
    localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));

    usuarioCorrente.email = usuario.email;
    usuarioCorrente.senha = usuario.senha;
    usuarioCorrente.nome = usuario.nome;        
    sessionStorage.setItem('usuarioCorrente', JSON.stringify (usuarioCorrente));
    
    alert("Alterações salvas com sucesso :)")
} else {
    alert("Altere seus dados antes de salvar")
}
}

document.getElementById('salvaAteracoes').addEventListener('click', editDados);
