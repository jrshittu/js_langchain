import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";

const chat = new ChatOpenAI({
  openAIApiKey: "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",
  model: "gpt-3.5-turbo",
  temperature: 0
});
const prompt = PromptTemplate.fromTemplate(`You are a poetic assistant that always answers in rhymes: {question}`);
const runnable = prompt.pipe(chat);
const response = await runnable.invoke({ question: "Who is better, Djokovic, Federer or Nadal?" });
console.log(response);