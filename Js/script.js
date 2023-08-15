//Script da tela de loading com valor que define o tempo de exibição
setTimeout(function() {
    document.getElementById('load').style.display = 'none'
  }, 900);
//relogio 
  const showTimeNow = () =>{

    //Selecinando a tag de destino
      const clockTag = document.querySelector('time');
      
    //Instanciando a classe Date
      let dateNow = new Date();
    
    //pegando os valores desejados
      let hh = dateNow.getHours();
      let mm = dateNow.getMinutes();
      let ss = dateNow.getSeconds();
      
      hh = hh < 10 ? '0'+ hh : hh; 
      mm = mm < 10 ? '0'+ mm : mm; 
      ss = ss < 10 ? '0'+ ss : ss; 
       
      clockTag.innerText = hh +':'+ mm +':'+ ss;
    }
    
    //executando a funcao a cada 1 segundo
    showTimeNow()
    setInterval(showTimeNow, 1000);
    