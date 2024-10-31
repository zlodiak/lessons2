import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UsersService);
  });

  it('should exists', () => {
    expect(service).toBeTruthy();
  });

  it('should return six users', (done: DoneFn) => {
    service.get('users').subscribe(users => {
      expect(users.data.length).toBe(6);
      done();
    })
  });
});
