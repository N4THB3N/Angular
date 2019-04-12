import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { TiendaComponent} from './components/tienda/tienda.component';
import { UbicacionComponent} from './components/ubicacion/ubicacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RestService } from './services/rest.service'


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    UbicacionComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
