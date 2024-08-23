import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaqebotService } from './maqebot/maqebot.service';
import { MaqebotController } from './maqebot/maqebot.controller';

@Module({
  imports: [],
  controllers: [AppController, MaqebotController],
  providers: [AppService, MaqebotService],
})
export class AppModule {}
