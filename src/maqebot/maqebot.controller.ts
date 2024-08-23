import { Body, Controller, Post } from '@nestjs/common';
import { MaqebotService } from './maqebot.service';

@Controller('maqebot')
export class MaqebotController {
  constructor(private readonly maqebotService: MaqebotService) {}

  @Post('getDirectionMaqeBot')
  async getDirectionMaqeBot(@Body() body): Promise<string> {
    try {
      const response = await this.maqebotService.getDirectionMaqeBot(
        body?.command,
      );
      return `
      X: ${response?.x},
      Y: ${response?.y},
      Direction: ${response?.direction}`;
    } catch (error) {
      console.error(error);
      return 'Somthing went wrong';
    }
  }
}
