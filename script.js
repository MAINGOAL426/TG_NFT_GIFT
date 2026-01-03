function setPayment(network, address, amount, note) {
  const box = document.getElementById("payment-box");
  box.innerHTML = `
    <b>Сеть:</b> ${network}<br><br>
    <b>Сумма:</b> ${amount}<br><br>
    <b>Отправьте на адрес:</b><br>
    <span class="address">${address}</span><br><br>
    <small>${note}</small>
  `;
}



