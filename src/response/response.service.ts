import { Injectable } from '@nestjs/common';
const { Configuration, OpenAIApi } = require("openai");

@Injectable()
export class ResponseService {

    async responseIA(){
        let response;
        try{
        const configuration = new Configuration({
        apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);
        let response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "me and me",
            temperature: 0.6,
            max_tokens: 250,
          });
        }catch(e){
            console.error(e);
            return e;
        }
        return response;
    }
}
