# Programação de Funcionalidades
  As telas desenvolvidas para cada funcionalidade do sistema são exibidas neste tópico. O endereço pode ser acessado no seguitne link: (link)

## Criação, leitura e exclusão Categorias (RF-01)
Desenvolvedor(a): Diana Santiago Oliveira dos Santos

A criação das categorias permite que os usuários categorizem por âmbito suas atividades, itens e hábitos. 

<p align = "center">
  <img src = "img/nova_categoria.png">
</p>

## Estrutura dos dados 

const titulo_categoria =  document.getElementById('titulo')
const cor_categoria =  document.getElementById('cor-categoria')

const getCategoria = () => JSON.parse(localStorage.getItem("dbCategoria")) ?? [];
const setCategoria = (dbCategoria) => localStorage.setItem("dbCategoria", JSON.stringify(dbCategoria));

const criarCategoria = (categoria) => {
    const dbCategoria = getDados();
    dbCategoria.push(categoria);
    setDados(dbCategoria)
}



## Visualização Mensal do calendário (RF-02)
Desenvolvedor(a): Pedro Henrique Diniz Luiz


## Tela Criação de itens e hábitos (RF-08, RF-03, RF-09) 
Desenvolvedor(a): Ellen Caroline Trindade Gonçalves Cândido

## Criação de atividades (RF-01, RF-09)
Desenvolvedor(a): Pedro Mota Cassemiro

## Notificação e resumos por email (RF-006)
Desenvolvedor(a): Gabriela Vitoria Pereira

## Alteração de design do site (RF-011)
Desenvolvedor(a): Juliana Dutra
