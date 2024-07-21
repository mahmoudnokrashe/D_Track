const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "YOUR_API_KEY",
});
const openai = new OpenAIApi(configuration);

async function generateText(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        max_tokens: 100,
    });
    return response.data.choices[0].text;
}

// مثال على الاستخدام
generateText("اكتب لي نص إعلان عن منتج جديد").then(text => {
    console.log(text);
});
 استخدام المكتبة لاستدعاء OpenAI API وتوليد النصوص. فيما يلي مثال باستخدام JavaScript وNode.js