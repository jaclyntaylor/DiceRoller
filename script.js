//Jaclyn Taylor
// Making Yahtzee

function toggleDieHold(id) {
    // Grab the data attribute and toggle it
    let currentActiveStatus = document.getElementById(id).getAttribute("data-active");
    let newStatus = currentActiveStatus==="true"?false:true;
    document.getElementById(id).setAttribute("data-active", newStatus);
    // apply the held class accordingly
    if(newStatus) {
        document.getElementById(id).classList.remove("held")
    }else{
        document.getElementById(id).classList.add("held")
    }
}

function rollDice(){
    // Grab all active dice
    let allActiveDie = document.querySelectorAll('[data-active="true"]');
    // roll the dice and update die src and alt
    for(let die of allActiveDie){
        let num = Math.floor(Math.random()*6)+1
        die.setAttribute("src", `images/${num}.png`);
        die.setAttribute("alt", `Die${num}`);
    }
}

