const listaDeTeclas = document.querySelectorAll(".tecla");

function play(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Error");
  }
}

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    play(idAudio);
  };

  tecla.onkeydown = function (e) {
    if (e.code === "Space" || e.code === "Enter") {
      tecla.classList.add("ativa");
    } else tecla.classList.remove("ativa");
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
