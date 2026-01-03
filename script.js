let currentAddress = "";

function setPayment(network, address, amount, note){
  currentAddress = address;
  const box = document.getElementById("payment-box");
  
  // Показываем предупреждение только для USDT
  const warningHTML = note.includes("USDT") 
      ? `<div class="payment-warning">${note}</div>` 
      : `<small>${note}</small>`;
  
  box.innerHTML = `
    <b>Сеть:</b> ${network}<br><br>
    <b>Сумма:</b> ${amount}<br><br>
    <b>Адрес:</b><br>
    <span class="address" id="wallet-address">${address}</span><br><br>
    <button class="copy-btn" onclick="copyAddress()">Скопировать адрес</button><br><br>
    ${warningHTML}
  `;
}

function copyAddress(){
  if(!currentAddress) return;
  navigator.clipboard.writeText(currentAddress).then(()=>{
    const status = document.getElementById("copy-status");
    status.innerText = " ✔ Адрес скопирован";
    status.style.color = "#00ffae";
    setTimeout(()=>{ status.innerText=""; },2000);
  });
}
