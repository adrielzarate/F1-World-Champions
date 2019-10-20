import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { WorldChampionsComponent } from './world-champions/world-champions.component';
import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SeasonWinnersComponent } from './season-winners/season-winners.component';
import { DriverRowComponent } from './driver-row/driver-row.component';

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
