import { Injectable } from '@angular/core';
import { BibleWord } from '../models/bible-word';
@Injectable()
export class ProgressService {

  learnedVerses: BibleWord[] = [];
  needToLearnVerses: BibleWord[] = [];
  constructor() { }

  addProgress(verse:BibleWord, learned:boolean){

    if(learned && this.learnedVerses.filter(v => this.checkIfVerseEquals(v, verse)).length < 0){
      this.learnedVerses.push(verse);
    } else if(this.learnedVerses.filter(v => this.checkIfVerseEquals(v, verse)).length < 0) {
      this.needToLearnVerses.push(verse);
    }
  }

  checkIfVerseEquals(verse:BibleWord, currentVerse:BibleWord):boolean{
    return currentVerse.book === verse.book && currentVerse.chapter === verse.chapter && currentVerse.verse === verse.verse;
  }

}