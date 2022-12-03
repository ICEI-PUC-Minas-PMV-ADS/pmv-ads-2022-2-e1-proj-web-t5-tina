// CRUD - Criar Atividade

const tituloCategoria = document.getElementById("titulo-categoria");
const corCategoria = document.getElementById("cor-categoria");

const camposCategoria = [tituloCategoria, corCategoria];

const getDadosCategoria = () => JSON.parse(localStorage.getItem("dbCategoria")) ?? [];
const setDadosCategoria = (dbCategoria) =>
  localStorage.setItem("dbCategoria", JSON.stringify(dbCategoria));

const criarCategoria = (categoria) => {
  const dbCategoria = getDadosCategoria();
  dbCategoria.push(categoria);
  setDadosCategoria(dbCategoria);
};

// const limparCampos = () => {
//   const inputs = document.querySelectorAll("form input");
//   inputs.forEach((input) => (input.value = ""));

//   const textareas = document.querySelectorAll("form textarea");
//   textareas.forEach((textarea) => (textarea.value = ""));

//   const selects = document.querySelectorAll("form select");
//   selects.forEach((select) => (select.value = ""));
// };

const limparErrosCategoria = () => {
  tituloCategoria.classList.remove("campo-vazio");
  corCategoria.classList.remove("campo-vazio");
};

const isDadosValidosCategoria = (categoria) => {
  const categorias = getDadosCategoria();
  var controlador = 0;
  var validade = true;
  categorias.forEach((dadoCategoria) => {
    if (
      dadoCategoria.titulo.toUpperCase() ==
      categoria.titulo.toUpperCase()
    ) {
      controlador++;
    }
  });

  if (controlador != 0) {
    validade = false;
    alert("Já existe categoria com o mesmo título registrada.");
  }
  return validade;
};

const salvarCategoria = () => {
  var camposVaziosCategoria = 0;

  camposCategoria.forEach((campo) => {
    if (campo.value == "") {
      campo.classList.add("campo-vazio");
      camposVaziosCategoria++;
    } else {
      campo.classList.remove("campo-vazio");
    }
  });

  if (camposVaziosCategoria == 0) {
    const categoria = {
      titulo: tituloCategoria.value,
      cor: corCategoria.value,
    };
    if (isDadosValidosCategoria(categoria)) {
      criarCategoria(categoria);
      load();
      onOff("categoria");
    }
  }
};

document
  .getElementById("criar-categoria")
  .addEventListener("click", salvarCategoria);

// CRUD - ler categoria

const lerCategoria = () => getDadosCategoria();
