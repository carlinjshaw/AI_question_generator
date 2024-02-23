// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env[''], // This is the default and can be omitted
// });

// const generate = async () => {
//     const chatCompletion = await openai.chat.completions.create({
//       messages: [{ role: 'user', content: 'What is the capitol of Idaho?' }],
//       model: 'gpt-3.5-turbo',
//     });
//     console.log(chatCompletion)

// }

//https://stackoverflow.com/questions/76561836/chatgpt-api-function-calling

const generate = () => {
    fetch('https://api.openai.com/v1/chat/completions')
    console.log(chatCompletion)

}

const start = (event) => {
    event.preventDefault();
    generate();
}

document.querySelector(".gen-btn").addEventListener("click", start);