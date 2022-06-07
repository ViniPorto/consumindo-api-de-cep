'use strict';

const preencher_formulario = (endereco) => {
    console.log(endereco);
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}

const pesquisar_cep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    if(!endereco.hasOwnProperty('erro')){
        preencher_formulario(endereco);
        return;
    }
    document.getElementById("endereco").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}

document.getElementById("cep").addEventListener("focusout", pesquisar_cep);

