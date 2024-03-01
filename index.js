let nome = "Pablo"
let xp = "10001"

if(xp < 1000){
    console.log("A patente do seu héroi é Ferro")
}else if(xp >= 1001 && xp <= 2000){
    console.log("A patente do seu héroi é Bronze")
}else if (xp >= 2001 && xp <= 5000){
    console.log("A patente do seu héroi é Prata")
}else if(xp >= 5001 && xp <= 7000){
    console.log("A patente do seu héroi é Ouro")
}else if(xp >= 7001 && xp <= 8000){
    console.log("A patente do seu héroi é Platina")
}else if(xp >= 8001 && xp<= 9000){
    console.log("A patente do seu héroi é Ascendente")
}else if(xp >= 9001 && xp <= 10000){
    console.log("A patente do seu héroi é Imortal")
}else(xp >= 10001)
    console.log("A patente do seu héroi é Radiante")

console.log("O Héroi de nome " + nome + " está no nível de " + xp);

