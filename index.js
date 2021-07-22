 console.log("Integrando JavaScript com CSS")

const apiTransacao = [
    {
        "descricao": "salario",
        "valor": 1000,
        "data": "13/07/2020",
        "tipo":  "entradas"
    },
    {

        "descricao": "Mercado",
        "valor": 200,
        "data": "14/07/2020",
        "tipo": "saidas"
    },
    {
        "descricao": "Mause",
        "valor": 50,
        "data": "20/07/07/2020",
        "tipo": "total"
    },
    {   "descricao": "freela",
        "valor":  300,
        "data": "21/07/2020",
        "tipo":  "entradas"
    },
    {   "descricao": " jantar",
           "valor":  150,
        "data":  "20/07/2020",
        "tipo":  "saidas"
   },      
   
]
      let entrada = 0
      let saida = 0
       let tabela = document.querySelector("#tabela-transacao")
       let tipo
      for(let i= 0; i < apiTransacao.length; i++ ){
          if(apiTransacao[i].tipo==="entradas"){
        entrada = entrada + apiTransacao[i].valor
        tipo= "success"

    }else{
            
        saida = saida + apiTransacao[i].valor
            tipo = "danger"
    }
    

    tabela.innerHTML += "<tr class='table-" + tipo + "'><th>"
    + apiTransacao[i].descricao + "</th> <td> R$ "+ 
    apiTransacao[i].valor.toFixed(2) + "</td><td>" + apiTransacao[i].data +
     "</td><td><button type ='button' class='btn btn-outline-danger'>-</button></td></tr>"

    
}
        document.querySelector("#entrada").innerHTML+=entrada
        document.querySelector("#saida").innerHTML+=saida;
        document.querySelector("#total").innerHTML+=saldo
  
        function soma (event){
            event.preventDefault();
            let form = event.target
            let descricao = form.querySelector['imput#descrition'].value
            console.log[descrition]
        }
    
        

