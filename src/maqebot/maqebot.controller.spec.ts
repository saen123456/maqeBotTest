import { Test, TestingModule } from '@nestjs/testing';
import { MaqebotController } from './maqebot.controller';
import { MaqebotService } from './maqebot.service';

describe('MaqebotController', () => {
  let controller: MaqebotController;
  let service: MaqebotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaqebotController],
      providers: [MaqebotService], // เพิ่ม MaqebotService เข้าไปที่นี่
    }).compile();

    controller = module.get<MaqebotController>(MaqebotController);
    service = module.get<MaqebotService>(MaqebotService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
