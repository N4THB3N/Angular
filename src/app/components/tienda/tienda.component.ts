import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html', 
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements DoCheck{
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

    ngDoCheck(){
        console.log('Cambios en las propiedades');
    }
}

//dsdfsdf
//Tratando de cambiar algo más importante, a ver si algo de todo esto funciona