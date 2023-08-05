import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseController } from './response/response.controller';
import { ResponseService } from './response/response.service';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [ResponseModule],
  controllers: [AppController, ResponseController],
  providers: [AppService, ResponseService],
})
export class AppModule {}
