const limpiar = () => {
    document.getElementById("resultado").value = "";
}

const retroceder = () => {
    var resultado = document.getElementById("resultado")
    document.getElementById("resultado").value = resultado.scroll.slice(0,-1);
}

const agregar = (valor) => {
    document.getElementById("resultado").value += valor;
}

const  calcular = () => {
    var resultado = document.getElementById("resultado").value
    try {
        document.getElementById("resultado").value = eval(resultado);
    } catch (errpr) {
        document.getElementById(resultado).value = "Error";
    }
}