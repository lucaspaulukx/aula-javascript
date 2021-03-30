function soma(n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade >= 18) validar = true;
    else validar = false;   
    
    return validar;
}

function trocar(elemento){
    elemento.innerHTML = "Texto trocado";


}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function redirecionar(){
    window.open("https://google.com");
    //window.location.href = "https://google.com";
}

function botao(){
    console.log(document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!<b>");
}

function load(){
    alert("Página carregada!");
}

function change(elemento){
    console.log(elemento.value);
}

//var idade = prompt("Qual sua idade?");
//console.log(validaIdade(idade));

//alert(soma(5,10));

/*var d = new Date();
alert(d.getMonth() + 1);

var idade = prompt("Qual sua idade?");

if(idade >= 18){
    alert("Maior de idade");
}else alert("Menor de idade");


/*var frutas= [{nome: "maça", cor: "vermelha"}, {nome: "uva",cor: "roxa"}]
console.log(frutas);

/*var fruta = {nome: "maça", cor:"vermelha"}


console.log(fruta.nome);
alert(fruta.cor);*/





//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));