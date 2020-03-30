import { TestBed } from '@angular/core/testing';
import { CommentaireFictifService } from './commentaire-fictif.service';

describe('CommentaireFictifService', () => {
  let service: CommentaireFictifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireFictifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
