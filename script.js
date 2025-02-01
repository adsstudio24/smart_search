const searchIndex = [
    { title: "TensorFlow.js: Вступ", content: "TensorFlow.js — це бібліотека для машинного навчання у браузері." },
    { title: "Як працює NLP?", content: "Обробка природної мови (NLP) — це спосіб навчити комп’ютери розуміти людську мову." },
    { title: "JavaScript та AI", content: "З TensorFlow.js можна створювати AI-додатки без серверної частини." },
];

async function performSearch() {
    const query = document.getElementById('searchQuery').value.toLowerCase().trim();
    if (!query) {
        alert("Будь ласка, введіть запит.");
        return;
    }

    // Використання NLP для виправлення запитів (можна розширити)
    const correctedQuery = await correctSpelling(query);
    console.log("Виправлений запит:", correctedQuery);

    const results = searchIndex.filter(item => 
        item.title.toLowerCase().includes(correctedQuery) || 
        item.content.toLowerCase().includes(correctedQuery)
    );

    displayResults(results);
}

async function correctSpelling(query) {
    // Простий NLP-метод: виправлення поширених помилок
    const commonMistakes = { "тензорфлоу": "tensorflow", "джаваскріпт": "javascript" };
    return commonMistakes[query] || query;
}

function displayResults(results) {
    const resultsList = document.getElementById('searchResults');
    resultsList.innerHTML = "";

    if (results.length === 0) {
        resultsList.innerHTML = "<li>❌ Нічого не знайдено.</li>";
        return;
    }

    results.forEach(result => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${result.title}</strong>: ${result.content}`;
        resultsList.appendChild(li);
    });
}
