let numeros = [20];

function imprimir(){
    
    for(i=0;i<=20;i++){
        numeros[i]=i;
        console.log(numeros[i])
    }

    for(i = 0;i<=20;i++){
        var divEl = document.createElement("div");
        var textEl = document.createTextNode(numeros[i]);
        divEl.appendChild(textEl);
        document.getElementById("numeros").appendChild(divEl)
    }

    for(i = 0;i<=20;i++){
        document.getElementById("numerosLado").innerHTML = numeros[i] + " ";
    }
 }