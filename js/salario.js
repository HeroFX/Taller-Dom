function calcular(){
    let varHora = parseInt(document.getElementById("horas").value);
    let varValor = parseInt(document.getElementById("valor").value);

    if (varHora<= 0){
        alert("Numero de horas invalido");
        return;

    }
    document.getElementById("resultado").value = varHora * varValor;


}