async function getQuote() {
    const endpoint = '/quote'; // Fixed this line

    try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error('No quote found');
        const data = await res.json();
        document.getElementById('quote').innerText = `"${data.quote}"`;
    } catch (err) {
        document.getElementById('quote').innerText = "Sorry, no quote found.";
    }
}