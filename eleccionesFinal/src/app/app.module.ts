import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FiltrotimelineComponent } from './filtrotimeline/filtrotimeline.component';
import { CongresoComponent } from './congreso/congreso.component';
import { SenadoresmapComponent } from './senadoresmap/senadoresmap.component';
import { SenadoresfilterComponent } from './senadoresfilter/senadoresfilter.component';
import { DipmapComponent } from './dipmap/dipmap.component';
import { DipfilterComponent } from './dipfilter/dipfilter.component';
import { EncuestasComponent } from './encuestas/encuestas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
    TimelineComponent,
    FiltrotimelineComponent,
    CongresoComponent,
    SenadoresmapComponent,
    SenadoresfilterComponent,
    DipmapComponent,
    DipfilterComponent,
    EncuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
