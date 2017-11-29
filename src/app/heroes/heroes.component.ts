import { Component, OnInit } from '@angular/core';

import { Hero } from '../data/hero';
import { HEROES } from '../data/mock-heroes';
import { HeroService } from '../_services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero = 'Windstorm';

/*  hero: Hero = {
    id:1,
    name: 'WindStorm'
  };
*/

  //heroes = HEROES;
  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    ;
  }

  constructor(private heroService: HeroService) {

   }

  ngOnInit() {
    this.getHeroes();
  }

}
