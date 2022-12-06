// CRUD - atualizar Atividade

var atividadeASerAtualizada;
var atividadeASerExcluida;
var index = 0

const tituloEditado = document.getElementById('atualizar-titulo')
const descricaoEditado = document.getElementById('atualizar-descricao')
const dataInicioEditado = document.getElementById('atualizar-data-inicio')
const dataFimEditado = document.getElementById('atualizar-data-fim')
const horarioInicioEditado = document.getElementById('atualizar-horario-inicio')
const horarioFinalEditado = document.getElementById('atualizar-horario-final')
const categoriaEditado = document.getElementById('atualizar-categoria')
const prioridadeEditado = document.getElementById('atualizar-prioridade')
const periodizacaoEditado = document.getElementById('atualizar-periodizacao')

const intervaloHorariosDiarios = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

const camposEditados = [tituloEditado, descricaoEditado, dataInicioEditado, dataFimEditado, horarioInicioEditado, horarioFinalEditado, categoriaEditado, prioridadeEditado, periodizacaoEditado]

const preencherCamposModal = (atividadeASerAtualizada) => {

    document.querySelector("#atualizar-titulo").value = atividadeASerAtualizada.titulo
    document.querySelector("#atualizar-descricao").value = atividadeASerAtualizada.descricao
    document.querySelector("#atualizar-data-inicio").value = atividadeASerAtualizada.dataInicio
    document.querySelector("#atualizar-data-fim").value = atividadeASerAtualizada.dataFim
    document.querySelector("#atualizar-horario-final").value = atividadeASerAtualizada.horarioFinal
    document.querySelector("#atualizar-horario-inicio").value = atividadeASerAtualizada.horarioInicio
    document.querySelector("#atualizar-categoria").value = atividadeASerAtualizada.categoria
    document.querySelector("#atualizar-prioridade").value = atividadeASerAtualizada.prioridade
    document.querySelector("#atualizar-periodizacao").value = atividadeASerAtualizada.periodizacao

}

const abrirModalUpdateExcluir = (event) => {

    if (event.target.id != "" && event.target.id != "calendar" && event.target.id != "currentDay" && event.target.id != "currentDayDiario" && event.target.id != "horarios" && !intervaloHorariosDiarios.includes(event.target.id)) {
        onOff('atualizar-atividade')    

        getDados().forEach(atividade => {

            if (atividade.titulo == event.target.id) {

                index = getDados().findIndex(atividade => {
                    return atividade.titulo == event.target.id
                })
                atividadeASerAtualizada = getDados()[index]
                preencherCamposModal(atividadeASerAtualizada)
            }
        });
    }
}

const limparErrosEdicao = () => {
    tituloEditado.classList.remove('campo-vazio')
    descricaoEditado.classList.remove('campo-vazio')
    dataInicioEditado.classList.remove('campo-vazio')
    dataFimEditado.classList.remove('campo-vazio')
    horarioInicioEditado.classList.remove('campo-vazio')
    horarioFinalEditado.classList.remove('campo-vazio')
    categoriaEditado.classList.remove('campo-vazio')
    prioridadeEditado.classList.remove('campo-vazio')
    periodizacaoEditado.classList.remove('campo-vazio')
}

function isSameAtividade(atividadeAtualizada) {

    var valido = true
    var indexAtividade = 0
    getDados().forEach(atividade => {
        
       if ((atividade.titulo == atividadeAtualizada.titulo) && (index != indexAtividade)) {
            valido = false
            alert('Já existe atividade cadastrada com o título inserido.')
        }

        indexAtividade++

    });
    return valido
}

const atualizarAtividade = (atividadeAtualizada) => {
    
    const dbAtividade = getDados()
    dbAtividade[index] = atividadeAtualizada
    setDados(dbAtividade)
}

const salvarAtividadeAtualizada = () => {
    var camposVazios = 0;

    camposEditados.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('campo-vazio')
            camposVazios++
        } else {
            campo.classList.remove('campo-vazio')
        }
    });

    if (camposVazios == 0) {
        const atividadeAtualizada = {
            titulo: tituloEditado.value,
            descricao: descricaoEditado.value,
            dataInicio: dataInicioEditado.value,
            dataFim: dataFimEditado.value,
            horarioInicio: horarioInicioEditado.value,
            horarioFinal: horarioFinalEditado.value,
            categoria: categoriaEditado.value,
            prioridade: prioridadeEditado.value,    
            periodizacao: periodizacaoEditado.value
        }   

        if (isSameAtividade(atividadeAtualizada)) {
            atualizarAtividade(atividadeAtualizada)
            load();
            onOff('atualizar-atividade')
        }
    }
}

// Excluir Atividade

const excluirAtividade = () => {
    let confirmacao = confirm('Realmente deseja excluir a atividade selecionada? A ação não pode ser desfeita.')
    if (confirmacao) {
        const dbAtividade = getDados()
        dbAtividade.splice(index, 1)
        setDados(dbAtividade)
        load()
        onOff('atualizar-atividade')
    } else {
        onOff('atualizar-atividade')
    }

}

const concluirAtividade = () => {

    const partesData = dataFimEditado.value.split('-')
    const dataFormatada = new Date(partesData[0], partesData[1] - 1, partesData[2], 0, 0, 0, 0)
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const mesAtual = dataAtual.getMonth()
    const diaAtual = dataAtual.getDate()
    const dataAtualString = `${anoAtual}-${mes < 9 ? '0' : '' }${mesAtual + 1}-${diaAtual}`
    const partesDataAtual = dataAtualString.split('-')
    const dataAtualNoTime = new Date(partesDataAtual[0], partesDataAtual[1] - 1, partesDataAtual[2], 0, 0, 0, 0)
    
    if (dataFormatada >= dataAtualNoTime) {
        new Audio('parabenizacao.mp3').play()
        const dbAtividade = getDados()
        dbAtividade.splice(index, 1)
        setDados(dbAtividade)
        load()
        onOff('atualizar-atividade')
    }
}

document.querySelector('#calendar')
    .addEventListener('click', abrirModalUpdateExcluir)

document.querySelector('#atualizar')
    .addEventListener('click', salvarAtividadeAtualizada)

document.querySelector("#excluir")
    .addEventListener('click', excluirAtividade)

document.querySelector("#concluir")
    .addEventListener('click', concluirAtividade)