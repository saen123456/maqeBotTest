import { Test, TestingModule } from '@nestjs/testing';
import { MaqebotService } from './maqebot.service';

describe('MaqebotService', () => {
  let service: MaqebotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaqebotService],
    }).compile();

    service = module.get<MaqebotService>(MaqebotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should process command RW15RW1 correctly', async () => {
    const result = await service.getDirectionMaqeBot('RW15RW1');
    expect(result).toEqual({ x: 15, y: -1, direction: 'South' });
  });

  it('should process command W5RW5RW2RW1R correctly', async () => {
    const result = await service.getDirectionMaqeBot('W5RW5RW2RW1R');
    expect(result).toEqual({ x: 4, y: 3, direction: 'North' });
  });
});
