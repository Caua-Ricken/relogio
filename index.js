const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const relogio = setInterval(function time(){
    let dataHoje = new Date()
    let hour = dataHoje.getHours()
    let min = dataHoje.getMinutes()
    let seg = dataHoje.getSeconds()

     if(hour < 10){
        hour = '0' + hour}
    
    if(min < 10){
        min = '0' + min}
    
    if(seg < 10){
        seg = '0' + seg}

    hora.textContent = hour
    minuto.textContent = min
    segundo.textContent = seg    
})