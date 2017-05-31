import {Component, OnInit} from "@angular/core";
import {Localizacao} from "../model/localizacao.model";
import {Router} from "@angular/router";
import {HistoricoService} from "../historico.service";

@Component({
    selector: 'fd-historico-page',
    templateUrl: './historico-page.component.html',
    styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {

    historico: Localizacao[];

    constructor(private historicoService: HistoricoService, private router: Router) {
    }

    ngOnInit() {
        this.historicoService
            .listarHistoricos()
            .subscribe(
                (docs) => {

                    this.historico = docs;
                },
                (error) => console.error(error)
            );
    }

    mostrarDetalhes(localizacao: Localizacao) {

        this.router.navigate(['map', {"dominio": localizacao.dominio}]);
    }

    excluirHistorico(localizacao: Localizacao) {

        this.historicoService
            .excluirHistorico(localizacao)
            .subscribe(
                (doc) => {

                    let index = -1;
                    for (let i = 0, len = this.historico.length; i < len; i++) {
                        if (this.historico[i]._id === localizacao._id) {
                            index = i;
                            break;
                        }
                    }

                    if (index !== -1) {
                        this.historico.splice(index, 1);
                    }
                },
                (error) => console.error(error)
            );
    }
}
