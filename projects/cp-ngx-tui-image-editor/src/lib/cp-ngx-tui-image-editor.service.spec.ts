import { TestBed } from '@angular/core/testing';

import { CpNgxTuiImageEditorService } from './cp-ngx-tui-image-editor.service';

describe('CpNgxTuiImageEditorService', () => {
  let service: CpNgxTuiImageEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpNgxTuiImageEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
