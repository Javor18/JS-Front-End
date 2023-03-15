// Create a function, which creates a register for heroes,
// with their names, level, and items (if they have such).
//
// The input comes as an array of strings. Each element holds data for a hero,
// in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."
//
// You must store the data about every hero. The name is a string, a level
// is a number and the items are all strings.
//
//The output is all of the data for all the heroes you’ve stored sorted
// ascending by level. The data must be in the following format for each hero:
//Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}

function heroInventory(input) {

    let heroes = {};

    for (let hero of input) {

        let [heroName, heroLevel, heroItems] = hero.split(' / ');
        level = Number(heroLevel);
        items = heroItems.split(', ');

        heroes[heroName] = { level, items };
    }

    let sorted = Object.entries(heroes).sort((a, b) => a[1].level - b[1].level);

    for (let [name, hero] of sorted) {
        console.log(`Hero: ${name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }

}

heroInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)