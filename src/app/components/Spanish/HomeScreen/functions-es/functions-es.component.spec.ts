import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsEsComponent } from './functions-es.component';

describe('FunctionsEsComponent', () => {
  let component: FunctionsEsComponent;
  let fixture: ComponentFixture<FunctionsEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionsEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
