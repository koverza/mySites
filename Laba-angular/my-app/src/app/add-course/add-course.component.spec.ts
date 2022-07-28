import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import {RouterModule} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseComponent ],
      imports: [RouterModule.forRoot([]),],
      providers: [AuthService, UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create title', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const title = bannerElement.querySelector('.newCourseTitle')!;
    expect(title.textContent).toContain('New course');
  });

  it('should create cancel btn', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const title = bannerElement.querySelector('.cancel-btn')!;
    expect(title.textContent).toContain('Cancel');
  });

  it('should create save btn', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const title = bannerElement.querySelector('.submit-btn')!;
    expect(title.textContent).toContain('Save');
  });

  it('should create save label', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const label = bannerElement.querySelector('.title-label')!;
    expect(label.textContent).toContain('Title');
  });

  it('should create save label', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const description = bannerElement.querySelector('.description-label')!;
    expect(description.textContent).toContain('Description');
  });

  it('should create save label', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const duration = bannerElement.querySelector('.duration-label')!;
    expect(duration.textContent).toContain('Duration');
  });

  it('should create date label', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const date = bannerElement.querySelector('.date-label')!;
    expect(date.textContent).toContain('Date');
  });



});
