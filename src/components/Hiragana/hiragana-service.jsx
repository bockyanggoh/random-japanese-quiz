
const hiraganaDictionary = [
    {
        name: "a",
        value: "あ"
    },
    {
        name: "i",
        value: "い"
    },
    {
        name: "u",
        value: "う"
    },
    {
        name: "e",
        value: "え"
    },
    {
        name: "o",
        value: "お"
    }
]

export function randomHiragana(previous) {

    const index = Math.floor(Math.random() * ((hiraganaDictionary.length - 1)))
    let hiragana = hiraganaDictionary[index];
    if(previous != undefined) {
        while(previous === hiragana) {
            const index = Math.floor(Math.random() * ((hiraganaDictionary.length - 1)))
            hiragana = hiraganaDictionary[index];
        }
    }
    return hiraganaDictionary[index];
}
