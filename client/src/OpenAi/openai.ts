import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_SECRET_KEY,
  })
);

export const getChatGPTmessage = async (
  errorCode: string,
  context: "sign-in" | "sign-up"
): Promise<string> => {
  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `From this firebase error code return to me the best possible descriptive error message that i can return to my users. Here is the error => ${errorCode} The context is ${context}`,
      },
    ],
  });

  return result.data.choices[0].message as unknown as string;
};
