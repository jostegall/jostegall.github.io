// This is a Honors Project for GH 401 at Indiana State University
// by Joseph Stegall

// app function:
// - take in creature details from web app -- DONE
// - determine what system it is coming from -- DONE
//   - system will be a parameter a function -- DONE
// - evaluate the CR/LVL of the monster to it's Ironsworn rating -- DONE for D&D5e
//   - the rating will be a parameter a function -- DONE
// - take any attacks/abilites and use them as Ironsworn descriptors
//   - the function will have to take in a list of descriptors
// - return information to user -- DONE

// functions for converting between rulesets
const from5E = (rating) => {
    let rankInfo;
    rating = Number(rating);
    if (rating < 1) {
        rankInfo = "Rank: Troublesome\nInflicts 3 Progress per Harm\nInflicts 1 Harm";
    } else if (1 <= rating && rating <= 4) {
        rankInfo = "Rank: Dangerous\nInflicts 2 Progress per Harm\nInflicts 2 Harm";
    } else if (5 <= rating && rating <= 10) {
        rankInfo = "Rank: Formidable\nInflicts 1 Progress per Harm\nInflicts 3 Harm";
    } else if (11 <= rating && rating <= 17) {
        rankInfo = "Rank: Extreme\nInflicts 2 Ticks per Harm\nInflicts 4 Harm\n";        
    }  else if (rating >= 18) {
        rankInfo = "Rank: Epic\nInflicts 1 Tick per Harm\nInflicts 5 Harm";
    }  
    return rankInfo;
}

const fromPF1E = (rating) => {
    let [rank, progress, harm] = "";

    if (rating < 1) {
        rank = "Troublesome";
        progress = "3 Progress per Harm";
        harm = "Inflicts 1 Harm";
        // the broken, common folk, marsh rat, frostbound, haunt
    } else if (1 <= rating && rating <= 4) { 
        rank = "Dangerous";
        progress = "2 Progress per Harm";
        harm = "Inflicts 2 Harm";
        // hunter, mystic, raider, warrior, elf, varou, boar, gaunt, wolf, hawrro spider, bonewalker
    } else if (5 <= rating && rating <= 10) {
        rank = "Formidable";
        progress = "1 Progress per Harm";
        harm = "Inflicts 3 Harm";
        // troll, bear, sodden
    } else if (11 <= rating && rating <= 17) {
        rank = "Extreme";
        progress = "2 Ticks per Harm";
        harm = "Inflicts 4 Harm";        
        // giant, primordial, basilisk, elder beast, mammoth, wyvern, chimera, hollow, iron revenant
    }  else if (rating >= 18) {
        rank = "Epic";
        progress = "1 Tick per Harm";
        harm = "Inflicts 5 Harm";
        // leviathan
    }  

    return rank, progress, harm;
}

const from2e = (rating) => {
    let [rank, progress, harm] = "";

    if (rating < 1) {
        rank = "Troublesome";
        progress = "3 Progress per Harm";
        harm = "Inflicts 1 Harm";

    } else if (1 <= rating && rating <= 4) {
        rank = "Dangerous";
        progress = "2 Progress per Harm";
        harm = "Inflicts 2 Harm";

    } else if (5 <= rating && rating <= 10) {
        rank = "Formidable";
        progress = "1 Progress per Harm";
        harm = "Inflicts 3 Harm";

    } else if (11 <= rating && rating <= 17) {
        rank = "Extreme";
        progress = "2 Ticks per Harm";
        harm = "Inflicts 4 Harm";        

    }  else if (rating >= 18) {
        rank = "Epic";
        progress = "1 Tick per Harm";
        harm = "Inflicts 5 Harm";
    }  

    return rank, progress, harm;
}

const transferDescripters = (name, descriptors) => {
    
}

// variables pulled from webpage
const button = document.getElementById("submit");
const cName = document.getElementById("cName");
const cr = document.getElementById("cr");
const details = document.getElementById("details");
const results = document.getElementById("results");

// determine which system conversion to call
// this is due to every system having a different rating system
function ruleCheck () {
    // upon submit, gets the selected ruleset
    const ruleset = document.getElementById("ruleset").value;
    //console.log(`${ruleset}`);
    //console.log(`${cName.value}`);
    //console.log(`${cr.value}`);
    //console.log(`${details.value}`);
    if (cr.value < 0 || cr.value === ""){
        results.innerHTML = "Creature Rating is invalid."
    } else if (ruleset === "pf1e") {
        results.innerHTML = `${ruleset} not avaible yet`;
    } else if (ruleset === "pf2e") {
        results.innerHTML = `${ruleset} not avaible yet`;
    } else {
        results.innerHTML = `${cName.value}\n${from5E(cr.value)}\n${details.value}`;
    }
};

function clickButton () {
    button.addEventListener("click", () => {
        ruleCheck();
    });
};

clickButton();