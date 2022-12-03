const titulo = document.getElementById('titulocategoria')
const descricao = document.getElementById('corcategoria')


const campos = [titulo, descricao]

const getCategorias = () => JSON.parse(localStorage.getItem("dbCategoria")) ?? [];
const setCategorias = (dbCategoria) => localStorage.setItem("dbCategoria", JSON.stringify(dbCategoria));

const criarCategoria = (categoria) => {
    const dbCategoria = getCategorias();
    dbCategoria.push(categoria);
    setCategorias(dbCategoria)
}

const limparCategorias = () => {
    const inputsc = document.querySelectorAll('form input')
    inputsc.forEach(input => input.value = '')

    const selectsc = document.querySelectorAll('form select')
    selectsc.forEach(select => select.value = '')
}

const limparErrosCategorias = () => {
    titulo.classList.remove('campo-vazio')
    descricao.classList.remove('campo-vazio')

}

const isCategoriaValidas = (categoria) => {

    const catetegorias = getcatetegorias()
    var ctt = 0;
    var validadec = true
    catetegorias.forEach(dadocatetegoria => {

        if (dadocatetegoria.titulo == catetegoria.titulo) {
            ctt++
        }
    });

    if (ctt != 0) {
        validadec = false
        alert('Já existe atividade com o mesmo título registrada.')
    }
    return validadec
}

const salvarcatetegoria = () => {
    var camposVaziosC = 0;

    campos.forEach(campoC => {
        if (campoC.value == '') {
            campoC.classList.add('campo-vazio')
            camposVazioCs++
        } else {
            campoC.classList.remove('campo-vazio')
        }
    });

    if (camposVaziosC == 0) {
        const categoria = {
            titulo: titulo.value,
            descricao: descricao.value,
        }
        if (isCategoriaValidas(categoria)) {
            criarCategoria(categoria)
            load();
        }
        onOff('categoria')
    }
}

document.getElementById('criar-categoria')
    .addEventListener('click', salvarCategoria)

// CRUD - ler atividade

const lerCategoria = () => getCategorias()