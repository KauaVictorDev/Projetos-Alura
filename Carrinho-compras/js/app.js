
let valorTotal;
limpar();









function adicionar (){ 
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = parseFloat  (produto.split('R$')[1]);
let quantidade = document.getElementById('quantidade').value;
let preco = quantidade * valorUnitario;
let carrinho = document.getElementById('lista-produtos');


  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
  </section>`;
  
  
valorTotal = valorTotal + preco;
let Campototal = document.getElementById('valor-total');
Campototal.textContent = `R$${valorTotal}`;
 document.getElementById('quantidade').value = 0;

    
 




 if ( quantidade > 100 ){
    quantidade = alert('Não temos mais Produtos no Estoque.')
    limpar();

   
 }  

if ( quantidade <= 0 ){
    quantidade = alert('insira uma quantidade Valida')
    limpar();
    
 }  


}


function limpar (){
   valorTotal = 0;
    let apagarCampototal = document.getElementById('lista-produtos').innerHTML= '';
    let apagarTotal =  document.getElementById('valor-total').textContent = 'R$0';
    


}

