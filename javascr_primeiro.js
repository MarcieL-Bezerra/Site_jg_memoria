


var imag1 = ""
var imag2 = ""
var imag3 = ""
var imag4 = ""
var imag5 = ""
var imag6 = ""
var imag7 = ""
var imag8 = ""
var imag9 = ""
var imag10 = ""
var imag11 = ""
var imag12 = ""

var imginicial = "img/ceu.png"
var contador = 0

var todosplanetas = ["img/sol.png", "img/Jupiter.png", "img/Mercurio.png","img/Venus.png","img/Terra.png","img/Marte.png",
                    "img/Lua.png","img/Neturno.png","img/Plutao.png","img/Saturno.png","img/Urano.png","img/Terra.png"];
for (var minhaimg in todosplanetas) {
    var sorteio = Math.floor(Math.random() * 5);
    var planetas = frutas.push(todosplanetas[sorteio]);
    var removedItem = todosplanetas.splice(sorteio, 1);


function sorteados()
        { 
            var planetas = ["img/sol.png", "img/Jupiter.png", "img/Mercurio.png","img/Venus.png","img/Terra.png","img/Marte.png"];
            var botoes = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"];
            for (var minhaimg in planetas) {
                var sorteio = Math.floor(Math.random() * (botoes.length-1));
                //alert("Minha image = " + planetas[minhaimg] + " sorteados = " + botoes[sorteio])
                n=2
                while (n > 0){
                    document.getElementById(botoes[sorteio]).src=planetas[minhaimg];
                    var removedItem = botoes.splice(sorteio, 1); // é assim que se remove um item
                    n--;
                }

            }
        }


function btn1()
        { 
        
            document.getElementById("img1").src=imag1;

        let myGreeting = setTimeout(function() {
            document.getElementById("img1").src=imginicial;
          }, 1000)

        

        }

function btn2()
{ 

    document.getElementById("img1").src=imag1;

let myGreeting = setTimeout(function() {
    document.getElementById("img1").src=imginicial;
    }, 1000)
}

