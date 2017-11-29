import { Injectable } from '@angular/core';

import { Hero } from '../data/hero';
import { HEROES } from '../data/mock-heroes';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from '../_services/message.service';

@Injectable()
export class HeroService {

  getHeroes(): Observable <Hero[]>{
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }

}
