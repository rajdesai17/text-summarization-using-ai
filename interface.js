const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = 'AIzaSyBvSQGTnpMbaH5q7hLLAd1LG7TsDOhVgQ4';

const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = "write a story about selenium"

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text)
}

run();
