
function searchWord() {
const word = document.querySelector("#wordInput").value;

fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    
.then((response) => response.json())
.then((data) => displayResult(data))
.catch((error) => console.error("Error fetching data:", error));
}


function displayResult(data) {
    const word = data[0].word;
    const meaning = data[0].meanings[0].definitions[0].definition;
    const example = data[0].meanings[0].definitions[0].example;
    const audio = data[0].phonetics[0]?.audio;

    document.querySelector("#word").textContent = word;
    document.querySelector("#meaning").textContent = meaning;
    document.querySelector("#example").textContent = example;
    const audioBtn = document.querySelector("#play-audio");

    if (audio) {
        audioBtn.onclick = () => {
             new Audio(audio).play();
            
        };
    }
}
document.querySelector("#search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    searchWord();
})