var peso;
var altura;
var IMC;
var resultado;
function calcular(event){
    event.preventDefault();
    peso=document.getElementById("peso").value;
    altura=document.getElementById("altura").value;
    resultado=document.getElementById("resultado");
    IMC=peso/(altura*altura);   
    
    if (IMC<17){
        resultado.innerHTML='<br/> O IMC é: '+IMC.toFixed(2)+ '<br/> Cuidado voce esta muito a baixo do peso';
    }
    else if(IMC<=18 && IMC>=17){
        resultado.innerHTML='<br/> O IMC é: '+IMC.toFixed(2)+ '<br/> Voce esta a baixo do peso';
    }
    else if(IMC>=18.5 && IMC<=24.99){
        resultado.innerHTML='<br/> O IMC é: '+IMC.toFixed(2)+ '<br/> Voce esta no peso ideal';
    }
    else if(IMC>=25 && IMC<=29.99){
        resultado.innerHTML='<br/> O IMC é: '+IMC.toFixed(2)+ '<br/> Acima do peso';
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