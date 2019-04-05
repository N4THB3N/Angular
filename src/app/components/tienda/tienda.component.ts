import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html', 
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent{
    public titulo; 
    public nombreDeUbicacion: string;
    public ubicacion;

    constructor(){
        this.titulo = 'Project way';
    }

    mostrarNombre(){
        console.log(this.nombreDeUbicacion);
    }

    verDatosUbicacion(event){
        this.ubicacion = event;
    }
}

//dsdfsdf
//Tratando de cambiar algo más importante, a ver si algo de todo esto funciona