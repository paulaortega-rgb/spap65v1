import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: ``
})
export class HeroeComponent {
  public heroe:Heroe={
        idx:-1,
        nombre: "",
        bio: "",
        img: "",
        aparicion: "",
        casa:""
  };
  constructor(private _heroesService:HeroesService,
              private _activatedRoute:ActivatedRoute
  ){
    
    this._activatedRoute.params.subscribe(parametros=>{
      //console.log('parametros:',parametros);
      this.heroe=this._heroesService.getHeroe(parametros['id1']);
      console.log('heroe Local:',this.heroe);
    });
  }
}
