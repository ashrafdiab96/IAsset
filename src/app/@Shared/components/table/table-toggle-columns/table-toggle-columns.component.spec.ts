import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableToggleColumnsComponent } from './table-toggle-columns.component';

describe('TableToggleColumnsComponent', () => {
  let component: TableToggleColumnsComponent;
  let fixture: ComponentFixture<TableToggleColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableToggleColumnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableToggleColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
