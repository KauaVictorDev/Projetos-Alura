function sortear(){
 let quantidade  = parseInt(document.getElementById('quantidade').value);
 let  de = parseInt(document.getElementById('de').value);
 let  ate  = parseInt(document.getElementById('ate').value);
  
  if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
  }

 

 let sorteados = [];
 let numero;

 for( let i = 0; i < quantidade; i++){
     numero = GerarnumeroAleatório(de, ate);
     
    
     while(sorteados.includes(numero)){
      numero = GerarnumeroAleatório(de, ate);
      alert('Não foi possivel gerar o seu Numero');; 
    }
      
    if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  } 


     sorteados.push(numero);
    }
  
let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:${sorteados}</label>`
  Alterarstatusdobotao();

}

function GerarnumeroAleatório(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Alterarstatusdobotao() {
 let botao = document.getElementById('btn-reiniciar')
 
 if(botao.classList.contains('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
 } else {   
   botao.classList.remove('container__botao');
   botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar (){
    document.getElementById('ate').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('resultado').innerHTML='<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    Alterarstatusdobotao();
  }



