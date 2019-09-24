import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeCompletoComponent } from './informe-completo.component';

describe('InformeCompletoComponent', () => {
  let component: InformeCompletoComponent;
  let fixture: ComponentFixture<InformeCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
