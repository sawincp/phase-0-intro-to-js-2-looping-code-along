// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added to the bowl!`);
    }
}

wrapGifts(gifts);



const names = ["Corey", "Megan", "Scott"];
const action = "birthday"

function writeCards(names,action){
    const message = [];
    for (let i = 0; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${action} gift!`)
    }
    return(message);
}
writeCards(names, action)

function countDown(){
    let count = 10;
    while (count >= 0){
        console.log(count--);
    }
}
countDown()