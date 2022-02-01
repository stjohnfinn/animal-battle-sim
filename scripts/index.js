import animals from './animals.js';

$(document).ready(() => {
    console.log('starting app...');
    const submit = $('#submit-btn');
    
    addAnimals();

    submit.click(runSim);
});

function runSim() {
    console.log('runSim()');

    let anm1 = $('#animal-1').val()
    let amt1 = $('#amt-1').val()
    let anm2 = $('#animal-2').val()
    let amt2 = $('#amt-2').val()

    let battleLog = '';
    if (amt1 > 1) {
        battleLog += amt1 + ' ' + anm1 + 's versus '
    } else {
        battleLog += amt1 + ' ' + anm1 + ' versus '
    }

    if (amt2 > 1) {
        battleLog += amt2 + ' ' + anm2 + 's.'
    } else {
        battleLog += amt2 + ' ' + anm2 + '.'
    }
    console.log(battleLog);
}

function addAnimals() {
    console.log('addAnimals()');
    
    const baseA = "<option class='bg-gray text-white font-body' value=";
    const baseB = "</option>";
    for (let a of animals) {
        let el = $('#animal-1');
        el.html( el.html() + baseA + a.name.toLowerCase() + '>' + a.name + baseB );
        el = $('#animal-2');
        el.html( el.html() + baseA + a.name.toLowerCase() + '>' + a.name + baseB );
    }
}