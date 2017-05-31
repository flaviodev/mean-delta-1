import {Component} from "@angular/core";
import {Localizacao} from "../model/localizacao.model";
import {ActivatedRoute} from "@angular/router";
import {PesquisaDominioService} from "../pesquisa-dominio.service";
import {HistoricoService} from "../historico.service";


@Component({
    selector: 'fd-map-page',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {

    localizacao: any = new Localizacao();

    constructor(private historicoService: HistoricoService, private pesquisa:PesquisaDominioService, private route: ActivatedRoute) {
    }

    exibirLocalizacao(localizacao: Localizacao): void {
        this.localizacao = localizacao;

        this.historicoService
            .salvarHistorico(localizacao)
            .subscribe(
                (doc) => {

                },
                (error) => console.error(error)
            );
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
