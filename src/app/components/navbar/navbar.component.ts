import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private _heroesService:HeroesService,
              private router:Router
  ){}
  buscarheroe(texto:string){
    //let result:Heroe[]=[];
    //result=this._heroesService.buscarHeroes(texto);
    //console.log('Heroes encontrados',result);
    this.router.navigate(['/buscador',texto]);
  }
}
