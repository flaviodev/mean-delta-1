import { TestBed, inject } from '@angular/core/testing';

import { PesquisaDominioService } from './pesquisa-dominio.service';

describe('PesquisaDominioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesquisaDominioService]
    });
  });

  it('should be created', inject([PesquisaDominioService], (service: PesquisaDominioService) => {
    expect(service).toBeTruthy();
  }));
});
