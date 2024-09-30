function calculate(){
    var mount = Number(document.getElementById('mount').value)
    var year = Number(document.getElementById('year').value)
    var rate = Number(document.getElementById('rate').value)
    var accumulate = 0;

    while(year > 0){
        value = (mount * rate) / 100
        mount = value + mount 
        accumulate = accumulate + mount 
        year -= 1
    }
    accumulate = accumulate.toFixed(2);
    document.getElementById('resolution').textContent = `Sua hipoteca ficará no valor de: R$${accumulate}`
}
