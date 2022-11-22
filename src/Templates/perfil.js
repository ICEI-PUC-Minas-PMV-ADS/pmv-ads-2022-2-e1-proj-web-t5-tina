  // Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
//   if (!usuarioCorrente.login) {
//     window.location.href = LOGIN_URL;
// }

function exibeUsuarios() {
    
    // Popula a tabela com os registros do banco de dados
    let listaUsuarios = '';
    for (i = 0; i < db_usuarios.usuarios.length; i++) {
        let usuario = db_usuarios.usuarios[i];
        // listaUsuarios += `<tr><td scope="row">${usuario.nome}</td><td>${usuario.email}</td></tr>`;
        document.querySelector("#nome").value = usuario.nome
        document.querySelector("#email").value = usuario.email

        console.log(usuario.nome);
    }

    // Substitui as linhas do corpo da tabela
    // document.getElementById("table-usuarios").innerHTML = listaUsuarios

}

function initPage() {

    // Associa a função de logout ao botão
    // document.getElementById('btn_logout').addEventListener('click', logoutUser);

    // Informa o nome do usuário logado
    // document.getElementById('nome').innerHTML = usuarioCorrente.nome;

    // Lista os usuários 
    exibeUsuarios ();
}

// Associa ao evento de carga da página a função para verificar se o usuário está logado
window.addEventListener('load', initPage);

//foto
document.querySelector('#image_input').addEventListener('change', function () {
    const reader = new FileReader()


    reader.addEventListener('load', () => {
        localStorage.setItem("recent-image", reader.result)
    })

    reader.readAsDataURL(this.files[0])
})

document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem("recent-image")
    if (recentImageDataUrl) {
        document.querySelector('#imgPreview').setAttribute('src', recentImageDataUrl)
    }
})