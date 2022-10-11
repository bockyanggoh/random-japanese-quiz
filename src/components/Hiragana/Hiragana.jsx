import React, {useState} from "react";
import {randomHiragana} from "./hiragana-service";


function Hiragana() {
    const [word, setWord] = useState(undefined);

    return (
        <>
        <button onClick={() => {
            const hiragana = randomHiragana();
            console.log(hiragana)
            setWord(hiragana)
        }}>Random</button>
            {word && <label>{word.name}</label>}
            {word && <label>{word.value}</label>}
        </>
    )
}

export default Hiragana;
