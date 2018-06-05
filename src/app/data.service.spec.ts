import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [DataService]});
        service = TestBed.get(DataService);
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
  it('should use DataService array', () => {
    expect(service.sitters[0].firstname).toBe('Elin');
  });
  it('should use DataService method', () => {
    expect(service.getSitter('Elin')).toBe({
      firstname: 'Elin',
      lastname: 'Skuladottir',
      birthdate: new Date(2012, 5, 17),
      area: 'Greater Copenhagen',
      rating: [15],
      gender: 'female',
      rate: 150,
      workAreas: ['Greater Copenhagen']
    });
  });
});
