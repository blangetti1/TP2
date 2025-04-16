import { useState } from "react";
import Pantalla from "pantalla";

function Calculadora() {
  const [pantalla, setPantalla] = useState("");
  const [num1, setNum1] = useState(null);
  const [operador, setOperador] = useState(null);

  const manejarClickNumero = (valor) => {
    setPantalla(pantalla + valor);
  };

  const manejarClickOperador = (op) => {
    if (pantalla === "") return;

    setNum1(parseFloat(pantalla));
    setOperador(op);
    setPantalla("");
  };

  const calcularResultado = () => {
    const num2 = parseFloat(pantalla);
    let resultado = 0;

    switch (operador) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        resultado = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        resultado = "Error";
    }
    setPantalla(resultado.toString());

   
    if (!isNaN(resultado)) {
      setNum1(resultado);
    } else {
      setNum1(null);
    
    Setoperador(null);
  };
  };

  const limpiar = () => {
    setPantalla("");
    setNum1(null);
    setOperador(null);
  };

  return (
    <div className="calculadora">
      <Pantalla valor={pantalla} />
      <div className="botones">
        <button onClick={() => manejarClickNumero("7")}>7</button>
        <button onClick={() => manejarClickNumero("8")}>8</button>
        <button onClick={() => manejarClickNumero("9")}>9</button>
        <button onClick={() => manejarClickOperador("/")}>/</button>

        <button onClick={() => manejarClickNumero("4")}>4</button>
        <button onClick={() => manejarClickNumero("5")}>5</button>
        <button onClick={() => manejarClickNumero("6")}>6</button>
        <button onClick={() => manejarClickOperador("*")}>*</button>

        <button onClick={() => manejarClickNumero("1")}>1</button>
        <button onClick={() => manejarClickNumero("2")}>2</button>
        <button onClick={() => manejarClickNumero("3")}>3</button>
        <button onClick={() => manejarClickOperador("-")}>-</button>

        <button onClick={limpiar}>C</button>
        <button onClick={() => manejarClickNumero("0")}>0</button>
        <button onClick={calcularResultado}>=</button>
        <button onClick={() => manejarClickOperador("+")}>+</button>
      </div>
    </div>
  );
}

export default Calculadora;
