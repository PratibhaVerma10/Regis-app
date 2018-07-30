import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductCsvComponent } from './add-product-csv.component';

describe('AddProductCsvComponent', () => {
  let component: AddProductCsvComponent;
  let fixture: ComponentFixture<AddProductCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
