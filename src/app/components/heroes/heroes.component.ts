import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: ``
})
export class HeroesComponent {
  heroes:Heroe[]=[];
  constructor(private _heroesService:HeroesService,
              private router:Router
  ){ }
  ngOnInit():void{
    this.heroes=this._heroesService.getHeroes();
    console.log('Heroes:',this.heroes);

  }
  verHeroe(Ix:number){
    console.log('ver informacion de heroe No:'+Ix);
    this.router.navigate(['/heroe',Ix]);
  }
}
