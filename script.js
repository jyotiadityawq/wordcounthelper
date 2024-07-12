async function countWords() {
    const text = document.getElementById('user-input').value;
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('word-count').innerText = wordCount;
}

async function summarizeText() {
    const text = document.getElementById('user-input').value;
    if (!text) return;

    const apiKey = 'Plsenteryourkeyanduse'; 
    const apiUrl = `https://api.summarizebot.com/summarize?apiKey=${apiKey}&text=${encodeURIComponent(text)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('result').innerText = data.summary;
    } catch (error) {
        console.error('Error summarizing the text:', error);
    }
}

