const mostrarHoras = document.getElementById("horas");
const mostrarMinutos = document.getElementById("minutos");
const mostrarSegundos = document.getElementById("segundos");

const relogio = setInterval(function time(){


let data = new Date();
let horas = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();

if (horas < 10) horas = "0" + horas
if (minutos < 10) minutos = "0" + minutos
if (segundos < 10) segundos = "0" + segundos

mostrarHoras.textContent = horas
mostrarMinutos.textContent = minutos
mostrarSegundos.textContent = segundos
})






