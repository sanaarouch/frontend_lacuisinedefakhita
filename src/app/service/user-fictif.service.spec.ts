import { TestBed } from '@angular/core/testing';
import { UserFictifService } from './user-fictif.service';

describe('UserFictifService', () => {
  let service: UserFictifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFictifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
