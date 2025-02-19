const jogar = () => {
  const quantidade = document.getElementById("quantidade");
  const valor = parseInt(quantidade.value);
  if(valor>=6 && valor <= 15){
    let resultado =document.getElementById("resultado");
    resultado.innerHTML = gerarNumeros(valor);
  }else{
    alert("O valor deve estar entre 6 e 15");
  }
}

const gerarNumeros = quantidade => {
  const volante = Array(quantidade);
  volante.fill(0);

  volante.forEach((valor, indice) => {
   let ok = false;
    let numero = 0;

    while(!ok){
      numero = Math.floor(Math.random() * 60 + 1);
      ok = true;
      volante.forEach(valor => {
        if (valor === numero){
          ok = false;
        }
      });
    }
    volante[indice] = numero;
  });
const compareFn = (a, b) => (a - b);
volante.sort(compareFn);
return volante.join(" - ");
}

