const display = document.querySelector(".display");
const botoes = document.querySelectorAll("button");

// Lógica para os botões da calculadora
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valor = botao.innerText.trim();

    if (valor === "C") {
      display.innerText = "0";
    } else if (valor === "=") {
      try {
        let conta = display.innerText.replace(/x/g, "*");
        display.innerText = eval(conta);
      } catch (e) {
        display.innerText = "Erro";
      }
    } else {
      if (display.innerText === "0") {
        display.innerText = valor;
      } else {
        display.innerText += valor;
      }
    }
  });
});
