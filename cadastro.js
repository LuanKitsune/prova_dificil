document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("professor-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const professorName = document.getElementById("professor-name").value;
    const professorId = document.getElementById("professor-id").value;
    const cpf = document.getElementById("CPF").value;
    const senha = document.getElementById("Senha").value;

    console.log("Nome do Professor:", professorName);
    console.log("ID do Professor:", professorId);
    console.log("CPF:", cpf);
    console.log("Senha:", senha);
    
    form.reset();
  });
});
