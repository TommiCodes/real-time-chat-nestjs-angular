import { Test, TestingModule } from '@nestjs/testing';
import { UserHelperService } from './user-helper.service';

describe('UserHelperService', () => {
  let service: UserHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHelperService],
    }).compile();

    service = module.get<UserHelperService>(UserHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
