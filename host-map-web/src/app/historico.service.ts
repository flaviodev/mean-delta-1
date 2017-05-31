import { Injectable } from '@angular/core';
import {HttpClientService} from "./http-client.service";
import {Observable} from "rxjs/Observable";
import {Localizacao} from "./model/localizacao.model";

@Injectable()
export class HistoricoService {

    constructor(private httpClient: HttpClientService) {
    }

    listarHistoricos() {
        return this.httpClient.get('http://localhost:3000/api/localizacao')
            .map(response => response)
            .catch(error => Observable.throw(error));
    }


    salvarHistorico(localizacao: Localizacao) {
        return this.httpClient.post('http://localhost:3000/api/localizacao', localizacao)
            .map(response => response)
            .catch(error => Observable.throw(error));
    }

    excluirHistorico(localizacao: Localizacao) {
        return this.httpClient.delete('http://localhost:3000/api/localizacao/' + localizacao._id)
            .map(response => response)
            .catch(error => Observable.throw(error));
    }

}
