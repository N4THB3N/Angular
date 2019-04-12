import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  titulo = 'Clase de productos';
  teachers = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getTeachers();
    console.log('Producto lanzado')
  }

  getTeachers(){
    this.rest.getTeachers().subscribe(res => {
      console.log(res);
    });
  }

}
