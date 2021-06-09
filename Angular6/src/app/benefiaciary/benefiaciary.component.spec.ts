import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefiaciaryComponent } from './benefiaciary.component';

describe('BenefiaciaryComponent', () => {
  let component: BenefiaciaryComponent;
  let fixture: ComponentFixture<BenefiaciaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefiaciaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefiaciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
