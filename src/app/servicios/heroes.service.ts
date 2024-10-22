import { Injectable } from "@angular/core";
export interface Heroe {
  idx:number;
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
@Injectable()
export class HeroesService{
   private heroes:Heroe[]=[
      { 
       idx:1,
        nombre: "La Princesa y el Sapo",
        bio: "Tiana, una joven trabajadora que sueña con abrir su propio restaurante en Nueva Orleans, se encuentra con un príncipe convertido en sapo debido a un hechizo. Al besarlo para romper la maldición, Tiana también se convierte en sapo. Juntos emprenden una aventura para encontrar a una bruja que les ayude a recuperar su forma humana, mientras aprenden sobre la importancia de los sueños, la amistad y el amor.",
        img: "assets/img/la-princesa-y-el-sapo.png", 
        aparicion: "2009-11-01",
        casa:"Disney"
      },
      {
       idx:2,
        nombre: "Buscando a Nemo",
        bio: "Marlin, un pez payaso sobreprotector, busca a su hijo Nemo, quien ha sido capturado por un buceador. A lo largo de su aventura, Marlin se une a Dory, una pez cirujano con problemas de memoria a corto plazo. Juntos enfrentan diversos desafíos en el océano, mientras Nemo intenta escapar de la pecera donde está cautivo. La película explora temas de paternidad, amistad y el crecimiento personal.",
        img: "assets/img/buscando-a-nemo.jpg",
        aparicion: "2003-05-01",
        casa:"Pixar"
      },
      {
      idx:3,
        nombre: "Cars 1",
        bio: "La historia sigue a Rayo McQueen, un coche de carreras novato que, tras un accidente en la ruta hacia la gran carrera en California, se pierde en un pueblo pequeño llamado Radiator Springs. Allí, conoce a varios personajes, como Mater, un camión de remolque, y Sally, un coche deportivo. A medida que Rayo se integra en la comunidad, aprende sobre la amistad, la humildad y el valor de lo que realmente importa en la vida.",
        img: "assets/img/cars.png",
        aparicion: "2006-01-01",
        casa: "Pixar"
      },
      {
      idx:4,
        nombre: "La Sirenita",
        bio: "Ariel, una joven sirena, sueña con vivir en el mundo humano. Después de salvar a un príncipe humano de un naufragio, se enamora de él y hace un trato con la bruja del mar, Ursula, para convertirse en humana a cambio de su voz. Ariel debe encontrar la manera de ganar el amor del príncipe antes de que se le acabe el tiempo. La película trata sobre el deseo de explorar, el sacrificio y el amor verdadero.",
        img: "assets/img/sirenita.png",
        aparicion: "1962-05-01",
        casa:"Disney "
      },
      {
      idx:5,
        nombre: "La bella y la bestia",
        bio: "Bella es una joven que se sacrifica por su padre, siendo prisionera de una Bestia en su castillo. A medida que pasa el tiempo, Bella descubre que la Bestia tiene un corazón noble y una historia trágica. Con la ayuda de los encantadores objetos del castillo, Bella y la Bestia desarrollan una profunda conexión. La historia trata sobre el amor verdadero, la aceptación y el valor de mirar más allá de las apariencias.",
        img: "assets/img/la-bella-y-la-bestia.jpg",
        aparicion: "1991-06-01",
        casa: "Disney"
      },
      {
      idx:6,
        nombre: "El Rey Leon 1",
        bio: "Simba, un joven león, es el heredero del trono de la Sabana. Sin embargo, su malvado tío Scar asesina a su padre, Mufasa, y engaña a Simba para que huya. En su exilio, Simba crece y se hace amigo de Timón y Pumba. Cuando se entera de la verdad, regresa a su hogar para enfrentar a Scar y reclamar su lugar como rey, aprendiendo sobre la responsabilidad y el ciclo de la vida en el camino.",
        img: "assets/img/rey-leon.png",
        aparicion: "1994-08-01",
        casa: "Disney"
      },
      {
      idx:7,
        nombre: "Monsters",
        bio: "En la ciudad de Monstropolis, los monstruos generan energía asustando a los niños. Sulley, el monstruo más grande y querido, y su mejor amigo Mike, descubren que los gritos de los niños pueden ser sustituidos por sus risas. Cuando una niña humana llamada Boo se escapa a su mundo, Sulley y Mike intentan devolverla a casa mientras enfrentan los miedos y los prejuicios de su sociedad. La película explora la amistad y la importancia de la risa.",
        img: "assets/img/moster.jpg",
        aparicion: "2001-11-01",
        casa: "Pixar"
      }
    ];
   constructor(){
    console.log('Servicio Heroes-p65 listo para funcionar');
   }

   getHeroes():Heroe[]{
      return this.heroes;
   }
   getHeroe(pos1:string):Heroe{
    return this.heroes[Number(pos1)];
   }
   buscarHeroes(t65:string):Heroe[]{
    let heroesArr:Heroe[]=[];
    t65=t65.toLowerCase();
    for(let h65 of this.heroes){
      let nombre=h65.nombre.toLowerCase();
      if(nombre.indexOf(t65)>=0){
        heroesArr.push(h65);
      }
    }
    return heroesArr;
  }

}