function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>

    <div class="nome-times">
      <h1>${player1}</h1>
      <h1>${player2}</h1>
    </div>
  `
}

document.getElementById("botao").onclick = function () {
  var body = document.getElementsByTagName("body")[0]
  var color = body.getAttribute("class")

  if (color === "yellow") {
    body.classList.remove("yellow")
    body.classList.add("blue")
  } else if (color === "blue") {
    body.classList.remove("blue")
    body.classList.add("green")
  } else if (color === "green") {
    body.classList.remove("green")
    body.classList.add("yellow")
  }
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style= "animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("catar", "13:00", "equador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "iran") +
      createGame("senegal", "13:00", "holanda") +
      createGame("estados Unidos", "16:00", "país de Gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arabia saudita") +
      createGame("dinamarca", "10:00", "tunísia") +
      createGame("méxico", "13:00", "polônia") +
      createGame("frança", "16:00", "austrália")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croácia") +
      createGame("alemanha", "10:00", "japão") +
      createGame("espanha", "13:00", "costa Rica") +
      createGame("bélgica", "16:00", "canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suiça", "07:00", "camarão") +
      createGame("uruguai", "10:00", "koreia do Sul") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brasil", "16:00", "sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("país de Gales", "07:00", "iran") +
      createGame("catar", "10:00", "senegal") +
      createGame("holanda", "13:00", "equador") +
      createGame("inglaterra", "16:00", "estados Unidos")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("tunísia", "07:00", "austrália") +
      createGame("polônia", "10:00", "arabia saudita") +
      createGame("frança", "13:00", "dinamarca") +
      createGame("argentina", "16:00", "méxico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japão", "07:00", "costa Rica") +
      createGame("bélgica", "10:00", "marrocos") +
      createGame("croácia", "13:00", "canadá") +
      createGame("espanha", "16:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camarão", "07:00", "sérvia") +
      createGame("koreia do Sul", "10:00", "ghana") +
      createGame("brasil", "13:00", "suiça") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("holanda", "12:00", "catar") +
      createGame("equador", "12:00", "senegal") +
      createGame("país de Gales", "16:00", "inglaterra") +
      createGame("iran", "16:00", "estados Unidos")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunísia", "12:00", "frança") +
      createGame("austrália", "12:00", "dinamarca") +
      createGame("polônia", "16:00", "argentina") +
      createGame("arabia saudita", "16:00", "méxico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croácia", "12:00", "bélgica") +
      createGame("canadá", "12:00", "marrocos") +
      createGame("japão", "16:00", "espanha") +
      createGame("costa Rica", "16:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("koreia do Sul", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguai") +
      createGame("camarão", "16:00", "brasil") +
      createGame("sérvia", "16:00", "suiça")
  )
