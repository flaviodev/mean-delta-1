import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {Localizacao} from "../model/localizacao.model";
import {PesquisaDominioService} from "../pesquisa-dominio.service";
import {MapPageComponent} from "../map-page/map-page.component";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'fd-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    dominio: String;

    @Output()
    localizacao: EventEmitter<Localizacao> = new EventEmitter<Localizacao>();

    constructor(private pesquisaService: PesquisaDominioService, private route: ActivatedRoute) {
    }

    ngOnInit() {

        let _dominio = this.route.snapshot.params["dominio"];
        this.dominio = _dominio;
    }

    pesquisar(): void {

        this.pesquisaService
            .pesquisarDominio(this.dominio)
            .subscribe(
                (data: Localizacao) => {

                    data.dominio = this.dominio;

                    this.localizacao.emit(data);
                },
                (error) => console.error(error)
            );

    }



}
