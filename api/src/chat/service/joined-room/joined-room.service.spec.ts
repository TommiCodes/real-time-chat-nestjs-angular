import { Test, TestingModule } from '@nestjs/testing';
import { JoinedRoomService } from './joined-room.service';

describe('JoinedRoomService', () => {
  let service: JoinedRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinedRoomService],
    }).compile();

    service = module.get<JoinedRoomService>(JoinedRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
