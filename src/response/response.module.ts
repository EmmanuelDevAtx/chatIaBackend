import { Module } from '@nestjs/common';
import { ResponseService } from './response.service'
import { ResponseController } from './response.controller';

@Module({
    imports:[],
    controllers:[ResponseController],
    providers:[ResponseService]
})
export class ResponseModule {}
