const animals = [
    {
        name: 'Lion',
        id: 'lion',
        strength: 90,
        intelligence: 20,
        weight: 420,
        speed: 50,
        packAbility: true,
        endurance: false,
        abilities: [
            'fangs',
            'claws'
        ]
    },
    {
        name: 'Gorilla',
        id: 'gorilla',
        strength: 85,
        intelligence: 75,
        weight: 300,
        speed: 25,
        packAbility: true,
        endurance: false,
        abilities: []
    },
    {
        name: 'Tarantula',
        id: 'tarantula',
        strength: 25,
        intelligence: 10,
        weight: 0.3,
        speed: 2,
        packAbility: false,
        endurance: false,
        abilities: [
            'venom'
        ]
    },
    {
        name: 'Orca Whale',
        id: 'orcawhale',
        strength: 200,
        intelligence: 70,
        weight: 6600,
        speed: 35,
        packAbility: true,
        endurance: true,
        abilities: []
    },
    {
        name: 'Polar Bear',
        id: 'polarbear',
        strength: 150,
        intelligence: 20,
        weight: 900,
        speed: 25,
        packAbility: false,
        endurance: false,
        abilities: [
            'claws'
        ]
    },
    {
        name: 'Golden Eagle',
        id: 'goldeneagle',
        strength: 25,
        intelligence: 35,
        weight: 10,
        speed: 120,
        packAbility: false,
        endurance: true,
        abilities: [
            'talons',
            'dive bomb',
            'cliff drop'
        ]
    },
    {
        name: 'Blue Whale',
        id: 'bluewhale',
        strength: 500,
        intelligence: 45,
        weight: 300000,
        speed: 10,
        packAbility: true,
        endurance: false,
        abilities: [
            'long distance echolocation'
        ]
    },
    {
        name: 'Sawtooth Shark',
        id: 'sawtoothshark',
        strength: 40,
        intelligence: 15,
        weight: 700,
        speed: 10,
        packAbility: false,
        endurance: false,
        abilities: []
    },
    {
        name: 'Tarantula Hawk',
        id: 'tarantulahawk',
        strength: 50,
        intelligence: 5,
        weight: 0.2,
        speed: 15,
        packAbility: false,
        endurance: true,
        abilities: [
            'extreme venom'
        ]
    },
    {
        name: 'Angler Fish',
        id: 'anglerfish',
        strength: 15,
        intelligence: 5,
        weight: 70,
        speed: 10,
        packAbility: false,
        endurance: true,
        abilities: [
            'night vision',
            'fangs'
        ]
    },
    {
        name: 'Human',
        id: 'human',
        strength: 25,
        intelligence: 100,
        weight: 145,
        speed: 25,
        packAbility: true,
        endurance: true,
        abilities: [
            'nuclear weapons',
            'guns',
        ]
    },
    {
        name: 'Hippopotamus',
        id: 'hippopotamus',
        strength: 800,
        intelligence: 20,
        weight: 3500,
        speed: 30,
        packAbility: false,
        endurance: false,
        abilities: []
    },
    {
        name: 'Rhinoceros',
        id: 'rhinoceros',
        strength: 800,
        intelligence: 15,
        weight: 5000,
        speed: 30,
        packAbility: true,
        endurance: false,
        abilities: [
            'horn'
        ]
    },
    {
        name: 'Cassowary',
        id: 'cassowary',
        strength: 30,
        intelligence: 10,
        weight: 100,
        speed: 35,
        packAbility: false,
        endurance: true,
        abilities: [
            'falcon kick!'
        ]
    },
    {
        name: 'Wolverine',
        id: 'wolverine',
        strength: 25,
        intelligence: 20,
        weight: 40,
        speed: 30,
        packAbility: false,
        endurance: false,
        abilities: [
            'claws'
        ]
    },
    {
        name: 'Sea Snake',
        id: 'seasnake',
        strength: 2750,
        intelligence: 5,
        weight: 4,
        speed: 12,
        packAbility: false,
        endurance: false,
        abilities: [
            'extreme venom'
        ]
    },
    {
        name: 'Poison Dart Frog',
        id: 'poisondartfrog',
        strength: 2000,
        intelligence: 5,
        weight: 1,
        speed: 4,
        packAbility: false,
        endurance: false,
        abilities: [
            'extreme poison'
        ]
    },
    {
        name: 'Blue Ringed Octopus',
        id: 'blueringedoctopus',
        strength: 3000,
        intelligence: 45,
        weight: 2,
        speed: 25,
        packAbility: false,
        endurance: false,
        abilities: [
            'extreme venom'
        ]
    },
    {
        name: 'Saltwater Crocodile',
        id: 'saltwatercrocodile',
        strength: 650,
        intelligence: 20,
        weight: 2000,
        speed: 16,
        packAbility: false,
        endurance: false,
        abilities: [
            'teeth',
            'tail'
        ]
    },
    {
        name: 'Duck Billed Platypus',
        id: 'duckbilledplatypus',
        strength: 1500,
        intelligence: 20,
        weight: 5,
        speed: 22,
        packAbility: false,
        endurance: false,
        abilities: [
            'extreme venom',
            'immune to morphine lol'
        ]
    },
    {
        name: 'King Cobra',
        id: 'kingcobra',
        strength: 3000,
        intelligence: 15,
        weight: 13,
        speed: 12,
        packAbility: false,
        endurance: false,
        abilities: [
            'extreme venom',
            'venom spit',
            'intimidation'
        ]
    },
    {
        name: 'Anaconda',
        id: 'anaconda',
        strength: 2500,
        intelligence: 10,
        weight: 550,
        speed: 5,
        packAbility: false,
        endurance: false,
        abilities: [
            'constrict'
        ]
    },
    {
        name: 'Cone Snail',
        id: 'conesnail',
        strength: 2500,
        intelligence: 5,
        weight: 1,
        speed: 5,
        packAbility: false,
        endurance: false,
        abilities: [
            'extreme venom',
            'piercing teeth'
        ]
    }
];

export default animals;

/**
 * Template:
 *  name: '',
    id: '',
    strength: 0,
    intelligence: 0,
    weight: 0,
    speed: 0,
    packAbility: false,
    endurance: false,
    abilities: []
 */