function talk() {
    var know = {
        "hi": "Hello, How are you!",
        "Who are you": "Hello, Chatbot here",
        "How are you": "Good :)",
        "Your followers": "I don't have followers, I have a supportive Family.",
        "ok": "Thank You So Much.",
        "Bye": "Okay! Will meet soon..",
        "What is your name": "I am your friendly Chatbot.",
        "What can you do": "I can chat with you and answer simple questions!",
        "Tell me a joke": "Why don't skeletons fight each other? Because they don't have the guts!",
        "Tell me a fun fact": "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
        "Where are you from": "I'm from the cloud, here to help you anytime!",
        "What is your favorite color": "I like all colors, but blue feels calm and friendly!",
        "How old are you": "I don't have an age, I was created to be timeless!",
        "What is the weather today": "I don't know the current weather, but you can check it on your favorite weather app.",
        "Tell me something inspiring": "Believe in yourself, and all that you are. Know that there is something inside you that is greater than any obstacle!",
        "Who is Ratan Tata": "Ratan Tata is a prominent Indian industrialist and former chairman of Tata Sons. He is known for his leadership, philanthropy, and ethical business practices."
    };

    var user = document.getElementById('userBox').value;  // Get the user's input
    var chatLog = document.getElementById('chatLog');     // Reference to the chat log

    // Display the user's input
    chatLog.innerHTML = "You: " + user + "<br>";

    // Check if the user's input matches a known response
    if (user in know) {
        chatLog.innerHTML += "Bot: " + know[user] + "<br>";
    } else {
        chatLog.innerHTML += "Bot: Sorry, I didn't understand<br>";
    }

    // Clear the input box after submission
    document.getElementById('userBox').value = "";
}
