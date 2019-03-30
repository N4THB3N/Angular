import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { TiendaComponent} from './components/tienda/tienda.component';
import { UbicacionComponent} from './components/ubicacion/ubicacion.component';
import {from} from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
