import { TestBed } from '@angular/core/testing';
import { TelegramWebApplicationService } from '@monorepo/ngx-twa';

describe('TelegramWebApplicationService', () => {
  let service: TelegramWebApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelegramWebApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
