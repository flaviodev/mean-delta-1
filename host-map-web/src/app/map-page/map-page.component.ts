import {Component} from "@angular/core";
import {Localizacao} from "../model/localizacao.model";
import {HttpClientService} from "../http-client.service";
import {ActivatedRoute} from "@angular/router";
import {PesquisaDominioService} from "../pesquisa-dominio.service";


@Component({
    selector: 'fd-map-page',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {

    localizacao: any = new Localizacao();

    constructor(private httpClient: HttpClientService, private pesquisa:PesquisaDominioService, private route: ActivatedRoute) {
    }

    exibirLocalizacao(localizacao: Localizacao): void {
        this.localizacao = localizacao;

        this.httpClient
            .post('http://localhost:3000/api/localizacao', localizacao)
            .subscribe((localizacao) => {

            });
    }

    ngOnInit() {
        let _dominio = this.route.snapshot.params["dominio"];

        if(_dominio) {
            this.pesquisa
                .pesquisarDominio(_dominio)
                .subscribe(
                    (data:Localizacao) => {
                        data.dominio = _dominio;
                        this.exibirLocalizacao(data);
                    },
                    (error) => console.error(error)
                );
        }
    }

}
