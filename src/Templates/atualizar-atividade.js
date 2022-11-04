// Atualizar atividade

function getId(div) {
    abrirModalUpdate(div.id)
}

function abrirModalUpdate(id) {

    getDados().forEach(atividade => {
        
        if (atividade.titulo == id) {
            var campoTitulo = document.querySelector("#titulo")
            var campoDescricao = document.querySelector("#descricao")
            var campoDataInicio = document.querySelector("#data-inicio")
            var campoDataFim = document.querySelector("#data-fim")
            var campoHorarioFinal = document.querySelector("#horario-final")
            var campoHorarioInicio = document.querySelector("#horario-inicio")
            var campoCategoria = document.querySelector("#categoria")
            var campoPrioridade = document.querySelector("#prioridade")
            var campoPeriodizacao = document.querySelector("#periodizacao")
            onOff('atividade')
            campoTitulo.value = atividade.titulo
            campoDescricao.value = atividade.descricao
            campoDataInicio.value = atividade.dataInicio
            campoDataFim.value = atividade.dataFim
            campoHorarioFinal.value = atividade.horarioFinal
            campoHorarioInicio.value = atividade.horarioInicio
            campoCategoria.value = atividade.categoria
            campoPrioridade.value = atividade.prioridade
            campoPeriodizacao.value = atividade.periodizacao
        }
    });
        
}