var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };

  var loadFile2 = function(event) {
    var output = document.getElementById('output2');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };

function atualizaCarteira(){
  //Função que pega os dados através do formulário e preenche na carteira.
  var nome = document.getElementById("botaoNome").value;
  document.getElementById("nome").innerHTML = nome;

  var matricula = document.getElementById("botaoMatricula").value;
  document.getElementById("matricula").innerHTML = matricula;

  var cpf = document.getElementById("botaoCpf").value;
  document.getElementById("cpf").innerHTML = cpf;

  var validade = document.getElementById("botaoValidade").value;
  document.getElementById("validade").innerHTML = validade;
}
