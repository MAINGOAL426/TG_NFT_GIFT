let currentAddress = "";

function setPayment(network, address, amount, note) {
  currentAddress = address;

  const box = document.getElementById("payment-box");
  box.innerHTML = `
    <b>Сеть:</b> ${network}<br><br>
    <b>Сумма:</b> ${amount}<br><br>
    <b>Адрес для оплаты:</b><br>
    <span class="address" id="wallet-address">${address}</span><br><br>

    <button class="copy-btn" onclick="copyAddress()">Скопировать адрес</button>
    <span id="copy-status"></span><br><br>

    <small>${note}</small>
  `;
}

function copyAddress() {
  if (!currentAddress) return;

  navigator.clipboard.writeText(currentAddress).then(() => {
    const status = document.getElementById("copy-status");
    status.innerText = " ✔ Адрес скопирован";
    status.style.color = "#00ffae";

    setTimeout(() => {
      status.innerText = "";
    }, 2000);
  });
}
