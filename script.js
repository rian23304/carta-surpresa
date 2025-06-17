function abrirCarta() {
  const carta = document.querySelector('.carta');
  const titulo = document.querySelector('.titulo');

  const jaAberta = carta.classList.contains('aberta');

  carta.classList.toggle('aberta');

  if (!jaAberta) {
    // Exibir confetes ao abrir
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });

    // Mostrar o título depois de um pequeno delay
    setTimeout(() => {
      titulo.style.display = "block";
    }, 500);
  }
}
