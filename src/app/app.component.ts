import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Drop or different';
  correo: string;

  ngOnInit(){
    this.correo = localStorage.getItem('correo');
  }

  ngDoCheck(){
    this.correo = localStorage.getItem('correo');
  }

  eliminarCorreo(){
    localStorage.removeItem('correo');
    alert(localStorage.getItem('correo'));
  }
}
