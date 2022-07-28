import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import {RouterModule} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [RouterModule.forRoot([]),],
      providers: [AuthService, UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create sign in btn', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('.signInBtn')!;
    expect(button.textContent).toContain('Sign in');
  });

  it('should create register btn', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('.registerBtn')!;
    expect(button.textContent).toContain('Register');
  });

  it('should create login text', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const text = bannerElement.querySelector('h1')!;
    expect(text.textContent).toContain('Login');
  });
});
