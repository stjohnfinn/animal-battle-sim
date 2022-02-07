import animals from './animals.js';
import {animalURLs} from './animalURLs.js';
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

    const key1 = anm1;
    const key2 = anm2;
    
    calcWinner(animalsMap.get(key1), animalsMap.get(key2), amt1, amt2);
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
    let prob2 = a2.name + ': ' + Math.ceil(power2 / total * 100) + '%';

    console.log(a1.name, power1);
    console.log(a2.name, power2);

    setProgress(100);

    let results = "<h1 id='contestant1' class='flex flex-row items center m-3 p-2 mb-0 border border-lightgray hover:shadow cursor-pointer'>" + prob1 + "</h1>";
    results += '<a href=' + animalURLs[a1.id] + ' class="font-body text-sm font-bold" >EXPLORE</a>';
    results += "<h1 id='contestant2' class='flex flex-row items center m-3 p-2 mb-0 border border-lightgray hover:shadow cursor-pointer'>" + prob2 + "</h1>";
    results += '<a href=' + animalURLs[a2.id] + ' class="font-body text-sm font-bold" >EXPLORE</a>';

    $('#results').html( results );

    
    $('#contestant1').hover(() => {displayTooltip(animalsMap.get(a1.id))}, () => removeTooltip());
    $('#contestant2').hover(() => {displayTooltip(animalsMap.get(a2.id))}, () => removeTooltip());
}

function setProgress(percent) {
    $('#loader-bar').css('width', String(percent) + '%');
}

function addAnimals() {
    
    const baseA = "<option class='bg-white text-gray font-body' value=";
    const baseB = "</option>";

    for (let a of animalsMap.values()) {
        let el = $('#animal-1');
        el.html( el.html() + baseA + a.id + '>' + a.name + baseB );
        el = $('#animal-2');
        el.html( el.html() + baseA + a.id + '>' + a.name + baseB );
    }
}

function loadAnimals() {
    for (let a of animals) {
        animalsMap.set(a.id, {
            id: a.id,
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
    $('#animal-1').val('lion');
    $('#animal-2').val('lion');
    $('#amt-1').val('1');
    $('#amt-2').val('1');
    $('#results').html("<h1>Results will be displayed here.</h1>");
    setProgress(0);
}

function repositionTooltip(e) {
    if (window.innerHeight - e.pageY < $('#tooltip').height() + 30) {
        $('#tooltip').css('top', (e.pageY+5) - $('#tooltip').height()).css('left', e.pageX+5);
    } else {
        $('#tooltip').css('top', e.pageY+5).css('left', e.pageX+5);
    }
}

function displayTooltip(animal) {
    $('#tooltip').css('display', 'block');

    $('#tooltip-title').text(animal.name.toUpperCase());

    if (animal.strength > 100) {
        $('#strength-stat > div').css('width', '100%');
    } else {
        $('#strength-stat > div').css('width', animal.strength + '%');
    }

    $('#intelligence-stat > div').css('width', animal.intelligence + '%');

    if (animal.weight > 2000) {
        $('#weight-stat > div').css('width', '100%');
    } else {
        $('#weight-stat > div').css('width', ((animal.weight / 2000) * 100) + '%');
    }
    $('#speed-stat > div').css('width', ((animal.speed) / 250) * 100 + '%');
}

function removeTooltip() {
    $('#tooltip').css('display', 'none');
}