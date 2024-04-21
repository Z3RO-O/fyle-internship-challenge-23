import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data', () => {
    const mockUser = { login: 'testuser' };
    const username = 'testuser';

    service.getUser(username).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${username}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('should fetch user repos', () => {
    const mockRepos = [{ name: 'repo1' }, { name: 'repo2' }];
    const username = 'testuser';

    service.getRepos(username).subscribe((repos) => {
      expect(repos).toEqual(mockRepos);
    });

    const req = httpMock.expectOne(
      `https://api.github.com/users/${username}/repos?page=1&per_page=10`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockRepos);
  });

  it('should fetch repo languages', () => {
    const mockLanguages = { TypeScript: 100, JavaScript: 200 };
    const fullName = 'testuser/repo1';

    service.getRepoLanguages(fullName).subscribe((languages) => {
      expect(languages).toEqual(mockLanguages);
    });

    const req = httpMock.expectOne(
      `https://api.github.com/repos/${fullName}/languages`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockLanguages);
  });
});
