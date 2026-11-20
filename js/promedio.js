function calcular(){

    let vNota1 = parseFloat(document.getElementById("nota1").value);
    let vNota2 = parseFloat(document.getElementById("nota2").value);
    let vNota3 = parseFloat(document.getElementById("nota3").value);

    if(vNota1<0 || vNota2 >5){
        alert("Nota 1: Invalida");
        return;
    }
    if(vNota2<0 || vNota2 >5){
        alert("Nota 2: Invalida");
        return;
    }
     if(vNota3<0 || vNota3 >5){
        alert("Nota 3: Invalida");
        return;
    }

    
    document.getElementById("promedio").value = `${(vNota1 + vNota2+ vNota3) / 3}`;

    if (promedio <3){
        alert("Perdio");
        return;
    }
    




}