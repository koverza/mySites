import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { CoursesComponentComponent } from './courses-component.component';
import {RouterModule} from "@angular/router";

describe('CoursesComponentComponent', () => {
  let component: CoursesComponentComponent;
  let fixture: ComponentFixture<CoursesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponentComponent ],
      imports: [RouterModule.forRoot([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should have <button> with "Edit!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('course-btn1')!;
    expect(button.textContent).toEqual('Edit');
  });
});
