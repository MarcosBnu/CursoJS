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
//var lista = ['Matheus', 'Lucas', 'Jose', 150];
//lista['length']==Mostra o tamanho da lista
//lista.indexOf('Jose')==Me passa a posição em que "Jose" esta, no caso na posição 2
//lista.push("Maria")==Isso é tipo um append no python, ele adiciona um novo item para a lista, separado por virgulas consigo adcionar mais de um valor
//lista.shift()==Remove um valor da lista
//lista.pop()==Remove o ultimo valor da lista
//lista.join(';')==O metodo join ira retornar uma string com os itens da lista separado por algun caractere, nesse caso seria : 'Matheus;Lucas;Jose;150'
