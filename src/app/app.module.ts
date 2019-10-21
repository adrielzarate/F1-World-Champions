import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { WorldChampionsComponent } from './components/world-champions/world-champions.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SeasonWinnersComponent } from './components/season-winners/season-winners.component';
import { DriverRowComponent } from './components/driver-row/driver-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorldChampionsComponent,
    LoadingComponent,
    PageNotFoundComponent,
    SeasonWinnersComponent,
    DriverRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
