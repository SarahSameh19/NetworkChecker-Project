import { TestBed } from '@angular/core/testing';
import { printerface } from '../app/pr';
import { ProviderCallingService } from './provider-calling.service';

describe('ProviderCallingService', () => {
  let service: ProviderCallingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderCallingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
