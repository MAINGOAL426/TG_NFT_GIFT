let currentAddress = "";

function setPayment(network, address, amount, note){
  currentAddress = address;
  const box = document.getElementById("payment-box");
  box.innerHTML = `
    <b>Сеть:</b> ${network}<br><br>
    <b>Сумма:</b> ${amount}<br><br>
    <b>Адрес:</b><br>
    <span class="address" id="wallet-address">${address}</span><br><br>
    <button class="copy-btn" onclick="copyAddress()">Скопировать адрес</button>
    <span id="copy-status"></span><br><br>
    <small>${note}</small>
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

// ----------------- SVG-иконки с градиентом -----------------
const svg = document.getElementById("svg-bg");
const colors = ["#37aee2","#1c87c9","#0ff","#ff0","#f0f"];
for(let i=0;i<50;i++){
  let x = Math.random()*window.innerWidth;
  let y = Math.random()*window.innerHeight;
  let size = Math.random()*30+10;

  let circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", size/2);
  circle.setAttribute("stroke-width", 2);
  circle.setAttribute("fill","none");

  // градиент
  let gradId = "grad"+i;
  let grad = document.createElementNS("http://www.w3.org/2000/svg","linearGradient");
  grad.setAttribute("id", gradId);
  grad.setAttribute("x1","0%");
  grad.setAttribute("y1","0%");
  grad.setAttribute("x2","100%");
  grad.setAttribute("y2","100%");

  colors.forEach((c,index)=>{
    let stop = document.createElementNS("http://www.w3.org/2000/svg","stop");
    stop.setAttribute("offset", (index/(colors.length-1)*100)+"%");
    stop.setAttribute("stop-color", c);
    grad.appendChild(stop);
  });
  svg.appendChild(grad);
  circle.setAttribute("stroke", `url(#${gradId})`);
  svg.appendChild(circle);
}
