import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentComponent } from './footer-component.component';

describe('FooterComponentComponent', () => {
  let component: FooterComponentComponent;
  let fixture: ComponentFixture<FooterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create text', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const text = bannerElement.querySelector('p')!;
    expect(text.textContent).toContain('Copyright © Bandera. All rights reserved');
  });

});
