function list_of_names(names) {

    names.sort()

    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`)
    }
}

list_of_names(["John", "Bob", "Christina", "Ema"])