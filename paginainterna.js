function trocartabela() {
    const artilheirosTable = document.getElementById('artilheiros-table');
    const assistenciasTable = document.getElementById('assistencias-table');

    if (artilheirosTable.style.display === 'none') {
        artilheirosTable.style.display = 'block';
        assistenciasTable.style.display = 'none';
    } else {
        artilheirosTable.style.display = 'none';
        assistenciasTable.style.display = 'block';
    }
}

function buscarTopico() {
    
    const pesquisa = document.getElementById("campoPesquisa").value.toLowerCase();
    
    const topicos = {
        "yuri": "yuri",
        "elenco": "elenco",
        "partidas": "partidas",
        "estatisticas": "estatisticas",
        "artilheiros": "artilheiros",
        "assistências": "assistências",
        "idolos": "idolos",
        "titulos": "titulos",
        "contato": "contato",
        "depay": "depay",
        "hector": "hector",
        "romero": "romero",
        "talles": "talles",
        "garro": "garro",
        "coronado": "coronado",
        "hugo souza": "hugo souza"
    };
    if (topicos[pesquisa]) {
        location.href = "#" + topicos[pesquisa];
    } else {
        alert("Tópico não encontrado.");
    }
    
}
const sair = document.getElementById("sair");

document.addEventListener("DOMContentLoaded", function() {
    const sair = document.getElementById("sair");
    sair.addEventListener("click", function() {
        localStorage.removeItem("array_usuarios");
        window.location.href = "index.html";
    });

});
