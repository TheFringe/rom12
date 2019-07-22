import { Injectable } from '@angular/core';
import { BibleWord } from '../models/bible-word';

@Injectable()
export class BibleService {

  romans: BibleWord[];
  constructor() {
    this.romans = [
      {
        book: 'Rom', 
        chapter: 12, 
        verse: 1,
        text: 'Därför ber jag er, bröder, vid Guds barmhärtighet att frambära er själva som ett levande och heligt offer som behagar Gud. Det skall vara er andliga gudstjänst.'
      }
    ];
  }

public get(index:number):BibleWord{
  return this.romans[index];
}
}