fetch("https://api.dictionaryapi.dev/api/v2/entries/en/<apple>")
.then((response) => response.json())
.then((data) => dictionary(data));
