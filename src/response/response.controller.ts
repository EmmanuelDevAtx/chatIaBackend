import { Body, Controller, Get } from '@nestjs/common';
import { ResponseService } from './response.service';
// import { IaGetResponseDto } from './dto/ia-get-response ';


@Controller('response')
export class ResponseController {

    constructor(private responseService: ResponseService){}

    @Get()
    getResponse():number{
        return 2;
    }

    @Get('/task')
    getData():string{
        return 'Rerotnando';
    }

    @Get('/responseIa')
    getResponseData():{
        reponse: string,
        type: 'emma'| 'hola'
    }{
        return {
            reponse:'jpfs',
            type: 'hola',
        };
    }

    // @Get('/ia')
    // getIa(@Body() task:IaGetResponseDto):{
    //     reponse: string,
    //     type: 'emma'| 'hola'
    // }{
    //     console.log(task);
    //     return {
    //         reponse:task.question,
    //         type: 'hola',
    //     };
    // }

    @Get('/res')
    getRes():any{
        return this.responseService.responseIA();
    }
    
    
}
