/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoignService } from './loign.service';

describe('Service: Loign', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoignService]
    });
  });

  it('should ...', inject([LoignService], (service: LoignService) => {
    expect(service).toBeTruthy();
  }));
});
