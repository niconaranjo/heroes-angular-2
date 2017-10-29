import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  heroebusc:any ={};
  busqueda:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService: HeroesService ){

               }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.heroebusc = this._heroesService.buscarHeroe( params ['info'] );
      this.busqueda = params ['info'] ;
    })

  }

}
