/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KegDataService } from './keg-data.service';

describe('KegDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KegDataService]
    });
  });

  it('should ...', inject([KegDataService], (service: KegDataService) => {
    expect(service).toBeTruthy();
  }));
});
