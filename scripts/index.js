import animals from './animals.js';
let animalsMap = new Map();

$(document).ready(() => {
    const submit = $('#submit-btn');

    loadAnimals();
    addAnimals();

    submit.click(runSim);
    $('#reset-btn').click(reset);

    $(document).mousemove(repositionTooltip);
});

function runSim() {
    setProgress(0);

    setProgress(2);

    let anm1 = $('#animal-1').val()
    let amt1 = $('#amt-1').val()
    let anm2 = $('#animal-2').val()
    let amt2 = $('#amt-2').val()

    setProgress(4);

    let battleLog = '';
    if (amt1 > 1) {
        battleLog += amt1 + ' ' + anm1 + 's versus '
    } else {
        battleLog += amt1 + ' ' + anm1 + ' versus '
    }

    setProgress(6);

    if (amt2 > 1) {
        battleLog += amt2 + ' ' + anm2 + 's.'
    } else {
        battleLog += amt2 + ' ' + anm2 + '.'
    }

    setProgress(8);
    
    $('#results').html("<p>" + 'Simulating ' +  battleLog + "..</p>");
    
    calcWinner(animalsMap.get(anm1), animalsMap.get(anm2), amt1, amt2);
}

function calcWinner(a1, a2, amt1, amt2) {
    let power1 = 0;
    power1 += a1.weight;
    power1 += a1.strength * 2;
    power1 += a1.intelligence * 2;
    power1 += a1.endurance ? 5 * a1.speed : a1.speed;
    power1 = a1.packAbility ? power1 * amt1 * 1.5 : power1 * amt1;
    power1 += a1.abilities.length * 10;
    power1 = Math.floor(power1);
    setProgress(30);

    let power2 = 0;
    power2 += a2.weight;
    power2 += a2.strength * 2;
    power2 += a2.intelligence * 2;
    power2 += a2.endurance ? 5 * a2.speed : a2.speed;
    power2 = a2.packAbility ? power2 * amt2 * 1.5 : power2 * amt2;
    power2 += a2.abilities.length * 10;
    power2 = Math.floor(power2);
    setProgress(65);

    const total = power1 + power2;
    let prob1 = a1.name + ': ' + Math.floor(power1 / total * 100) + '%';
    let prob2 = a2.name + ': ' + Math.floor(power2 / total * 100) + '%';

    setProgress(100);

    let results = "<h1 id='contestant1' class='flex flex-row items center m-3 p-2 border border-lightgray hover:shadow cursor-pointer'>" + prob1 + "</h1>";
    results += "<h1 id='contestant2' class='flex flex-row items center m-3 p-2 border border-lightgray hover:shadow cursor-pointer'>" + prob2 + "</h1>";
    $('#results').html( results );

    
    $('#contestant1').hover(() => {displayTooltip(animalsMap.get(a1.name))}, () => removeTooltip());
    $('#contestant2').hover(() => {displayTooltip(animalsMap.get(a2.name))}, () => removeTooltip());
}

function setProgress(percent) {
    $('#loader-bar').css('width', String(percent) + '%');
}

function addAnimals() {
    
    const baseA = "<option class='bg-white text-gray font-body' value=";
    const baseB = "</option>";

    for (let a of animals) {
        let el = $('#animal-1');
        el.html( el.html() + baseA + a.name + '>' + a.name + baseB );
        el = $('#animal-2');
        el.html( el.html() + baseA + a.name + '>' + a.name + baseB );
    }
}

function loadAnimals() {
    for (let a of animals) {
        animalsMap.set(a.name, {
            name: a.name,
            strength: a.strength,
            intelligence: a.intelligence,
            packAbility: a.packAbility,
            weight: a.weight,
            speed: a.speed,
            endurance: a.endurance,
            abilities: a.abilities
        });
    }
}

function reset() {
    $('#animal-1').val('Lion');
    $('#animal-2').val('Lion');
    $('#amt-1').val('1');
    $('#amt-2').val('1');
    $('#results').html("<h1>Results will be displayed here.</h1>");
    setProgress(0);
}

function repositionTooltip(e) {
    $('#tooltip').css('top', e.pageY+5).css('left', e.pageX+5);
}

function displayTooltip() {
    $('#tooltip').css('display', 'block');
}

function removeTooltip() {
    $('#tooltip').css('display', 'none');
}