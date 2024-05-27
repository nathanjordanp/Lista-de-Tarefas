function adicionarTarefa() {
    var tarefa = prompt("Digite a nova tarefa:");
    if (tarefa) {
        var lista = document.getElementById("lista-tarefas");
        var novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = '<input type="checkbox"> ' + tarefa;
        lista.appendChild(novaTarefa);
    }
}

function removerTarefasConcluidas() {
    var tarefas = document.querySelectorAll("#lista-tarefas li");
    tarefas.forEach(function(tarefa) {
        if (tarefa.querySelector("input[type='checkbox']").checked) {
            tarefa.remove();
        }
    });
}