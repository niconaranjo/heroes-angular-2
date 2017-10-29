import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {


  placeh:string = "Buscar Heroe";
  constructor( private router:Router ) { }

  ngOnInit() {
  }
  buscarHeroe(termino:string){
    if( termino.length >= 3){
      this.router.navigate(['/buscar',termino]);

    }else{

      this.placeh ="Ingrese mas de 3 caracteres";
    }

  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);

  }
}
