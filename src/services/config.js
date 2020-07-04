export const API_URI = 'https://pokeapi.co/api/v2';


export const MENUITEMS = ['Home', 'Pokemons', 'Legendaries', 'Favorites', 'About']
// https://wall.alphacoders.com/by_sub_category.php?id=173211&name=Pok%C3%A9mon+Fondos+de+pantalla&lang=Spanish&page=7
const outerClassname = 'mySlides';
const innerClassname = 'numbertext';
const columnClassname = 'column';
const imgClassname = 'demo cursor';
const style = { width: '100%' };
export const CAROUSEL_IMAGES = [
    {
        outerClassname: outerClassname,
        innerClassname: innerClassname,
        columnClassname: columnClassname,
        imgClassname: imgClassname,
        src: 'images/pikachu.jpg',
        id: 1,
        style: style
    },
    {
        outerClassname: outerClassname,
        innerClassname: innerClassname,
        columnClassname: columnClassname,
        imgClassname: imgClassname,
        src: 'images/pokemonall1.jpg',
        id: 2,
        style: style
    },
    {
        outerClassname: outerClassname,
        innerClassname: innerClassname,
        columnClassname: columnClassname,
        imgClassname: imgClassname,
        src: 'images/pokemon_home.jpg',
        id: 3,
        style: style
    },
    {
        outerClassname: outerClassname,
        innerClassname: innerClassname,
        columnClassname: columnClassname,
        imgClassname: imgClassname,
        src: 'images/water.jpg',
        id: 4,
        style: style
    },
    {
        outerClassname: outerClassname,
        innerClassname: innerClassname,
        columnClassname: columnClassname,
        imgClassname: imgClassname,
        src: 'images/pokemon_go1.jpg',
        id: 5,
        style: style
    },
]
export const TOTAL_IMAGES_CAROUSEL = CAROUSEL_IMAGES.length;



export const MEWS = [
    {
        className: 'mewvsmewtwo',
        id: 'imgmewvsmewtwo',
        src: 'images/mewVsmewtwo.jpg',
        title: 'Mew vs Mewtwo',
        content: `Mewtwo is Mew's bigger and more powerful clone. Mewtwo has been through more trauma than its original. Mew has a better variety of attacks, but Mewtwo's overall Pokédex stats are better.
        Though Mewtwo has raw power, it does not have the centuries of experience in battle that Mew possesses. Mew also has more willpower to survive, while Mewtwo attacked out of anger.`
    },
    {
        className: 'mew',
        id: 'imgmew',
        src: 'images/mew.png',
        title: 'Mew',
        content: `At first glance, Mew is a small, adorable Pokémon who loves to play with both trainers and other creatures. This tiny creature is a fan favorite among children who love its playful nature.
        Though Mew may charm you with its large eyes and cat-like aloofness, it's easy to misjudge this Psychic-type Pokémon.
        Mew is an ancient Pokémon and has witnessed the evolution of its species over time and Mew enjoys observing on the sidelines.`
    },
    {
        className: 'mewtwo',
        id: 'imgmewtwo',
        src: 'images/mewtwo.png',
        title: 'Mewtwo',
        content: `Though Mewtwo is Mew's clone, it is not the evolved form of Mew. The Laboratory created clone Mewtwo is often considered stronger, but still uses Mega Evolution forms.
                Mewtwo was seen as a boastful, destructive powerhouse seeking revenge.`
    }
]

export const BUTTONS_TYPES_POKEMONS = [
    {
        id: 'btnpokemons',
        value: 'pokemons',
        text: 'All Pokemons'
    },
    {
        id: 'btnalola',
        value: 'alola',
        text: 'Alola'
    },
    {
        id: 'btnmega',
        value: 'mega',
        text: 'Mega'
    },
    {
        id: 'btnlegen',
        value: 'legends',
        text: 'Legends'
    },
]

export const LEGENDARIESID = [
    144, 145, 146, 150,
    243, 244, 245, 249, 250,
    377, 378, 379, 380, 381, 382, 383, 384, 386,
    480, 481, 482, 483, 484, 485, 486, 487, 488, 489,
    638, 639, 640, 641, 642, 643, 644, 645, 646,
    716, 717, 718,
    772, 773, 785, 786, 787, 788, 789, 790, 791, 792, 800,
    10001, 10002, 10003, 10007, 10019, 10020, 10021, 10022, 10023, 10043, 10044,
    10062, 10063, 10076, 10077, 10078, 10079/*, 10155, 10156, 10157*/
]

export const POKEMONS_TYPES = {
    bug: {
        id: 1,
        type: 'bug',
        color: '#145214'
    },
    dark: {
        id: 2,
        type: 'dark',
        color: '#001a00'
    },
    dragon: {
        id: 3,
        type: 'dragon',
        color: '#33adff'
    },
    electric: {
        id: 4,
        type: 'electric',
        color: '#ffff00'
    },
    fairy: {
        id: 5,
        type: 'fairy',
        color: '#ffb3d9'
    },
    fighting: {
        id: 6,
        type: 'fighting',
        color: '#cc0000'
    },
    fire: {
        id: 7,
        type: 'fire',
        color: '#ff0000'
    },
    flying: {
        id: 8,
        type: 'flying',
        color: '#00ccff'
    },
    ghost: {
        id: 9,
        type: 'ghost',
        color: '#003366'
    },
    grass: {
        id: 10,
        type: 'grass',
        color: '#00ff00'
    },
    ground: {
        id: 11,
        type: 'ground',
        color: '#996600'
    },
    ice: {
        id: 12,
        type: 'ice',
        color: '#00ffff'
    },
    normal: {
        id: 13,
        type: 'normal',
        color: '#999999'
    },
    poison: {
        id: 14,
        type: 'poison',
        color: '#a300cc'
    },
    psychic: {
        id: 15,
        type: 'psychic',
        color: '#cc0099'
    },
    rock: {
        id: 16,
        type: 'rock',
        color: '#663300'
    },
    steel: {
        id: 17,
        type: 'steel',
        color: '#669999'
    },
    water: {
        id: 18,
        type: 'water',
        color: '#0000ff'
    }
}