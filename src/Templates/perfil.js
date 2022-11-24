//   Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
//   if (!usuarioCorrente.login) {
//     window.location.href = login.html;
// }

function exibeUsuarios() {
    
    document.querySelector("#nome").value = usuarioCorrente.nome
    document.querySelector("#email").value = usuarioCorrente.email

            console.log(usuarioCorrente.nome);

}

function initPage() {

    // Associa a função de logout ao botão
    // document.getElementById('btn_logout').addEventListener('click', logoutUser);

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
