function buscaCep() {
  var botao = $("#botao");
  botao.on("click", function() {
    var cep = $("#cep");
    $.ajax({
      url: "http://viacep.com.br/ws/" + cep.val() + "/json/",
      type: "Get",
      datatype: "json",
    }).done(function (response) {
      $("#cidade").val(response.localidade);
      $("#estado").val(response.uf);
    });
    
  });
}

buscaCep();

function viaCep() {
  var cep = $("#cep");
  var url = "http://viacep.com.br/ws/" + cep.val() + "/json/"; // URL

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = function () {
    //Função a ser chamada quando a requisição retornar do servidor
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      //Verifica se o retorno do servidor deu certo
      console.log(xhttp.responseText);
    }
  };

  xhttp.send(); //A execução do script CONTINUARÁ mesmo que a requisição não tenha retornado do servidor
}
