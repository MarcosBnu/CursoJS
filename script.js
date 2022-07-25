function entrar(){
    var teste=document.getElementById('teste'); //Recebe o elemento da id
    var apelido=prompt("Digite seu apelido");
    if (apelido=="" || apelido==null){
        alert("obs, algo deu errado");
        teste.innerHTML="Digita alguma coisa aiii";
    }
    else{
        teste.innerHTML="Seu apelido é "+apelido+" ";
        let botaoSair = document.createElement("button"); //Cria o botão
        botaoSair.innerText="Sair da conta";
        botaoSair.onclick=sair;//Coloca no botão o onclick para chamar a função sair
        teste.appendChild(botaoSair);//Coloca o botão na id teste
    }
}

function sair(){
    /*var x=1;
    while(x<11){
        alert("saindo em: "+x);
        x++;
    }
    */
   for(a = 1; a<11; a++){
    alert("saindo em: "+a);
   }

    alert("até a proxima");
    teste.innerHTML="Voce saiu";
}

function pedir(){
    pedido=prompt("digite do pedido");
    pedido=Number(pedido)
    switch (pedido) {
        case 1:
            alert("Voce escolheu 1");
            break;
        case 2:
            alert("Voce escolheu 2");
            break;
        case 3:
            alert("Voce escolheu 3");
            break;
        case 4:
            alert("Voce escolheu 4");
            break;
        default:
            break;
    }
}
//var lista = ['Matheus', 'Lucas', 'Jose', 150];
//lista['length']==Mostra o tamanho da lista
//lista.indexOf('Jose')==Me passa a posição em que "Jose" esta, no caso na posição 2
//lista.push("Maria")==Isso é tipo um append no python, ele adiciona um novo item para a lista, separado por virgulas consigo adcionar mais de um valor
//lista.shift()==Remove um valor da lista
//lista.pop()==Remove o ultimo valor da lista
//lista.join(';')==O metodo join ira retornar uma string com os itens da lista separado por algun caractere, nesse caso seria : 'Matheus;Lucas;Jose;150'
//Number()==Converte a variavel em numero


//==========================================================================================AULA SOBRE DATAS===========================================================================
//var data=new Date();==Cria uma variavel data, com a data atual
//data.getHours();==Mostra as hrs da data atual
//data.getSeconds();==Mostra os segundo da data atual
//var datanova= new Date("March 10, 2018")===Sat Mar 10 2018 00:00:00 GMT-0300 (Horário Padrão de Brasília) {}
//Date.parse(datanova)==Pega os milisegundos
//data.getMonth()==Pega o mes, porem janeiro = 0, fevereiro = 1 e assim sucessivamente
//data.getDate()==Pega o dia
//data.getDay()==Pega o dia da semana, porem domingo==0, segunda==1, terça igual a ==2 e assim sucissivamente
//data.getFullYear()==Pega o valor do ano
//Posso concatenar as data, por exemplo data.getDate()+"/"+(data.getMonth()+1 (somo 1 pois o id começa com 0))+"/"+data.getFullYear()
//data.setHours()==Soma hrs na variavel
//data.setDate()==Soma dias na variavel