import {Injectable} from '@angular/core';
import {HttpClientService} from "./http-client.service";
import {Observable} from "rxjs";

@Injectable()
export class PesquisaDominioService {

    constructor(private httpClient: HttpClientService) {
    }

    pesquisarDominio(dominio: String) {

        return this.httpClient.get('http://ip-api.com/json/' + dominio)
            .map(response => response)
            .catch(error => Observable.throw(error));

    }

}
