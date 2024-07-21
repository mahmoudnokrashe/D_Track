const deepai = require('deepai');
deepai.setApiKey('YOUR_API_KEY');

async function generateImage(prompt) {
    var resp = await deepai.callStandardApi("text2img", {
        text: prompt,
    });
    return resp.output_url;
}

// مثال على الاستخدام
generateImage("a beautiful sunset over the mountains").then(url => {
    console.log(url);
});
