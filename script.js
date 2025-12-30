// Nomes dos candidatos
let nomes = [
  "MAGRO",
  "MAGRA",
  "GORDA",
  "GORDO",
  "ATLÉTICO",
  "ATLÉTICA"
];

// Array de votos (6 candidatos)
let votos = [0, 0, 0, 0, 0, 0];

// Função chamada ao clicar no botão
function votar(numero) {
  votos[numero - 1]++;
  atualizar();
}

// Atualiza barras e porcentagens
function atualizar() {
  let total = votos.reduce((a, b) => a + b, 0);
  let maxAltura = 160;

  for (let i = 0; i < votos.length; i++) {
    let barra = document.getElementById(`bar${i + 1}`);
    let pct = document.getElementById(`pct${i + 1}`);

    if (!barra || !pct) continue;

    // atualiza tabela SE existir
    let votoTd = document.getElementById(`v${i + 1}`);
    if (votoTd) votoTd.innerText = votos[i];

    if (total === 0) {
      barra.style.height = "0px";
      pct.innerText = "0%";
    } else {
      let porcentagem = Math.round((votos[i] / total) * 100);
      barra.style.height = (porcentagem / 100) * maxAltura + "px";
      pct.innerText = porcentagem + "%";
    }
  }
}

// Encerrar votação e mostrar vencedor
function encerrarVotacao() {
  let maior = Math.max(...votos);
  let indiceVencedor = votos.indexOf(maior);

  let resultado = document.getElementById("resultadoFinal");
  let foto = document.getElementById("fotoVencedor");

  if (maior === 0) {
    resultado.innerText = "Nenhum voto registrado.";
    foto.style.display = "none";
  } else {
   resultado.innerText = `🏆 Vencedor: ${nomes[indiceVencedor]} com ${maior} votos!`;
    foto.src = `img/candidato${indiceVencedor + 1}.jpg`;
    foto.style.display = "block";
  }
}
