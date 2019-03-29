import {Component, Input} from '@angular/core';

@Component({
    selector: 'ubicacion',
    templateUrl: './ubicacion.component.html',
    styleUrls: ['./ubicacion.component.css']
})

export class UbicacionComponent{
    @Input() nombre:string;
    //public nombre: string;
    public zona: number;
    public descripcion: string;
    public encargado: string;
    public abierto: boolean;

    constructor(){
        this.nombre = 'Tienda uno';
        this.zona = 18;
        this.descripcion = 'En el Limon';
        this.encargado = 'Fernando Gamba';
        this.abierto = true;
    }
}