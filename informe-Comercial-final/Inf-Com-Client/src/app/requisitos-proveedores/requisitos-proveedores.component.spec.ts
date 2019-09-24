import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosProveedoresComponent } from './requisitos-proveedores.component';

describe('RequisitosProveedoresComponent', () => {
  let component: RequisitosProveedoresComponent;
  let fixture: ComponentFixture<RequisitosProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitosProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
