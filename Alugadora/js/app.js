

let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
       confirm('Realmente Deseja Devolver este jogo?')
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }


    contarEExibirJogosAlugados();
}






// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});






           // Atividade extra para descobrir se a palavra é um palindromo
/*
function EssapalavraéumPalindromo(){                                                        Fazendo a função para descobrir a palavra.
    
    let palavra = prompt('Descubra se a palavra Digitada é um Palindromo:');                Fazendo a pergunta para descobrir qual palavra será analisada.
    palavraseparda = palavra.split('');                                            Separadando as palavras por letras.
    palavraInvertida = palavraseparda.reverse();                            Invertendo as palavras 
    palavraInvertida = palavraInvertida.join('');                     Analisando se as palavras mesmo sendo invertidas possuem o a mesma escrita.
   
     
   if(palavra == palavraInvertida){                                 Fazendo um condição caso a palavra esteja correta ou errada.
    console.log('A Palavra: '  +palavra+ ' é um Palindromo')            Condição correta
   } else {                                               
    console.log('A Palavra: ' +palavra+ ' não é um Palindromo')        Condição errada
    

    EssapalavraéumPalindromo();                                  Chamando a função para gerar a palavra no console.
   };
}
*/




