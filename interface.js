const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = 'AIzaSyAk-DYg6JRz00z5NglWRdZJBxNGIPRwXLQ';

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