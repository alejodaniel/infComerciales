import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeExpressComponent } from './informe-express.component';

describe('InformeExpressComponent', () => {
  let component: InformeExpressComponent;
  let fixture: ComponentFixture<InformeExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
