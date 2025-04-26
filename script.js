document.getElementById("adicionarBtn").addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
  const input = document.getElementById("tarefaInput");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa antes de adicionar.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${texto}</span>
    <button class="remover">X</button>
  `;

  li.querySelector(".remover").addEventListener("click", () => {
    li.remove();
  });

  document.getElementById("listaTarefas").appendChild(li);
  input.value = "";
  input.focus();
}
