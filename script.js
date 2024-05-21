async function askAI() {
    const userInput = document.getElementById('userInput').value;
    const responseContainer = document.getElementById('responseContainer');
    
    if (!userInput.trim()) {
        responseContainer.innerHTML = '<p>Please enter a question.</p>';
        return;
    }

    responseContainer.innerHTML = '<p>Thinking...</p>';

    try {
        const response = await fetch('https://your-worker-subdomain.workers.dev', { // Update with your Worker URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: userInput }),
        });

        const data = await response.json();
        responseContainer.innerHTML = `<p><strong>Answer:</strong> ${data.answer}</p>`;
    } catch (error) {
        responseContainer.innerHTML = '<p>Something went wrong. Please try again.</p>';
    }
}
