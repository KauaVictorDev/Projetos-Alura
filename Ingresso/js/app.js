function comprar() {
  let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);



   if(tipo.value == 'pista' ){
    comprarPista(qtd);
   } else if (tipo.value == 'inferior') {
      comprarInferior(qtd);
   } else  {
    tipo.value == 'superior'
      comprarSuperior(qtd);
   }
 




}


function comprarPista(qtd){
     let Qtd_pista =    parseInt(document.getElementById('qtd-pista').textContent);
    
     if(qtd > Qtd_pista){
        alert('Não temos Ingresso suficiente para a Pista')
     } else{
        Qtd_pista = Qtd_pista - qtd;
        document.getElementById('qtd-pista').textContent = Qtd_pista;
       alert('Agradeçemos sua  Preferencia');
     }
 
     if (Qtd_pista == 0){
        document.getElementById('qtd-pista').textContent = 'Esgotado';
     }
 
 
    }






function comprarInferior(qtd){
     let inferior =    parseInt(document.getElementById('qtd-inferior').textContent);
    
     if(qtd > inferior){
        alert('Não temos Ingresso suficiente para a Parte Inferior')
     } else{
        inferior = inferior - qtd;
        document.getElementById('qtd-inferior').textContent = inferior;
       alert('Agradeçemos sua  Preferencia');
     }
 
       if (inferior == 0){
        document.getElementById('qtd-inferior').textContent = 'Esgotado';
     }
   
 
    }



 function comprarSuperior(qtd){
     let superior =    parseInt(document.getElementById('qtd-superior').textContent);
    
     if(qtd > superior){
        alert('Não temos Ingresso suficiente para a Parte Superior')
     } else{
        superior = superior - qtd;
        document.getElementById('qtd-superior').textContent = superior;
       alert('Agradeçemos sua  Preferencia');
     }
  
    if (superior == 0){
        document.getElementById('qtd-superior').textContent = 'Esgotado';
     }
   

      
    }
