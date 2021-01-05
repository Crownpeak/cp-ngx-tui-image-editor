import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpNgxTuiImageEditorComponent } from './cp-ngx-tui-image-editor.component';

describe('CpNgxTuiImageEditorComponent', () => {
  let component: CpNgxTuiImageEditorComponent;
  let fixture: ComponentFixture<CpNgxTuiImageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpNgxTuiImageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpNgxTuiImageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
