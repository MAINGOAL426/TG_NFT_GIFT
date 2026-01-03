function setPayment(network, address, amount, note) {
  const box = document.getElementById("payment-box");
  box.innerHTML = `
    <b>Network:</b> ${network}<br><br>
    <b>Amount:</b> ${amount}<br><br>
    <b>Send to address:</b><br>
    <span class="address">${address}</span><br><br>
    <small>${note}</small>
  `;
}

