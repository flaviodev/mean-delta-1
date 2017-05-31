import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {HttpClientService} from "./http-client.service";
import {HostPanelComponent} from './host-panel/host-panel.component';
import {AgmCoreModule} from "@agm/core";
import {environment} from "../environments/environment";
import {MapContainerComponent} from './map-container/map-container.component';
import {MenuTopComponent} from './menu-top/menu-top.component';
import {Routes, RouterModule} from "@angular/router";
import {MapPageComponent} from './map-page/map-page.component';
import {HistoricoPageComponent} from './historico-page/historico-page.component';
import {Localizacao} from "./model/localizacao.model";
import {PesquisaDominioService} from "./pesquisa-dominio.service";

export const rotas: Routes = [
    {path: '', redirectTo: 'map', pathMatch: 'full'},
    {path: 'map', component: MapPageComponent},
    {path: 'map/:dominio', component: MapPageComponent},
    {path: 'historico', component: HistoricoPageComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
        HostPanelComponent,
        MapContainerComponent,
        MenuTopComponent,
        MapPageComponent,
        HistoricoPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(rotas, { useHash: true }),
        AgmCoreModule.forRoot({
            apiKey: environment.googleApiKey
        })
    ],
    providers: [
        HttpClientService, PesquisaDominioService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
