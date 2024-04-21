import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      imports: [CommonModule],
    });
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user details when user input is provided', () => {
    const user = {
      name: 'John Doe',
      login: 'johndoe',
      bio: 'Software Developer',
      followers: 100,
      following: 50,
      public_repos: 20,
      twitter_username: 'johndoe_twitter',
      avatar_url: 'https://example.com/avatar.jpg',
    };

    component.user = user;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(user.name);
    expect(compiled.querySelector('p').textContent).toContain(`@${user.login}`);
    expect(compiled.querySelector('.text-gray-300').textContent).toContain(
      user.bio
    );
    expect(
      compiled.querySelectorAll('.text-gray-300')[0].textContent
    ).toContain(user.followers);
    expect(
      compiled.querySelectorAll('.text-gray-300')[1].textContent
    ).toContain(user.following);
    expect(
      compiled.querySelectorAll('.text-gray-300')[2].textContent
    ).toContain(user.public_repos);
    expect(compiled.querySelector('a').textContent).toContain(
      user.twitter_username
    );
    expect(compiled.querySelector('a').href).toContain(
      `https://twitter.com/${user.twitter_username}`
    );
    expect(compiled.querySelector('img').src).toContain(user.avatar_url);
  });

  it('should display "No Bio available" when user bio is not provided', () => {
    const user = {
      name: 'Jane Doe',
      login: 'janedoe',
      followers: 50,
      following: 20,
      public_repos: 10,
      twitter_username: null,
      avatar_url: 'https://example.com/avatar.jpg',
    };

    component.user = user;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.text-gray-300').textContent).toContain(
      'No Bio available'
    );
  });

  it('should display "N/A" for Twitter username when it is not provided', () => {
    const user = {
      name: 'Jane Doe',
      login: 'janedoe',
      followers: 50,
      following: 20,
      public_repos: 10,
      twitter_username: null,
      avatar_url: 'https://example.com/avatar.jpg',
    };

    component.user = user;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a')).toBeNull();
    expect(compiled.querySelector('.text-gray-500').textContent).toContain(
      'N/A'
    );
  });
});
