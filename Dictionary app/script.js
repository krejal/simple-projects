//https://dictionaryapi.dev/
const input = document.querySelector("input");
const button = document.querySelector("button");
const dictionary = document.querySelector(".dictionary-app")


async function dictionaryfnc(word) {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    return res[0]
}
button.addEventListener('click', fetchand)

async function fetchand(){
     const data = await dictionaryfnc(input.value)
     console.log(data)

     let partsof = []
     for (let i = 0; i < data.meanings.length; i++) {
        partsof.push(data.meanings[i].partOfSpeech)}

     dictionary.innerHTML = `<div class="card">
     <div class="property">
         <span>Word:</span>
         <span>${data.word}</span>
     </div>
     <div class="property">
         <span>Phonetics:</span>
         <span>${data.phonetic}</span>
     </div>
     <div class="property">
     <span><audio controls src="${Array.isArray(data.phonetics) && data.phonetics.length > 0 ? data.phonetics[0].audio : ''}"></audio></span>

     </div>
     <div class="property">
         <span>Definition:</span>
         <span>${data.meanings[0].definitions[0].definition}</span>
     </div>
     <div class="property">
         <span>Example:</span>
         <span>${data.meanings[1].definitions[0].definition}</span>
     </div>
     <div class="property">
         <span>${partsof.map(e => e).join(', ')}</span>
     </div>
 </div>
     `
}