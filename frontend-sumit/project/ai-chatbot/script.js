const API_KEY = "YOUR_OPENAI_API_KEY";  // Replace with your actual key

async function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (!message) return;

  appendMessage('You', message);
  input.value = '';

  const response = await getBotResponse(message);
  appendMessage('Bot', response);
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotResponse(userInput) {
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`,
  };

  const body = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful chatbot." },
      { role: "user", content: userInput }
    ],
    temperature: 0.7
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error(error);
    return "Oops! Something went wrong.";
  }
}
