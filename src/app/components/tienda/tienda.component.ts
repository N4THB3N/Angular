import { Component } from '@angular/core';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html', 
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent{
    public titulo; 
    public nombreDeUbicacion: string;

    constructor(){
        this.titulo = 'This is my very first store';
    }

    mostrarNombre(){
        console.log(this.nombreDeUbicacion);
    }
}

//dsdfsdf
//Tratando de cambiar algo más importante, a ver si algo de todo esto funciona