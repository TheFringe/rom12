import { Injectable } from '@angular/core';
import { BibleWord } from '../models/bible-word';
@Injectable()
export class ProgressService {

  learnedVerses: BibleWord[] = [];
  needToLearnVerses: BibleWord[] = [];
  constructor() { }

  addProgress(verse:BibleWord, learned:boolean){
    const previouslyLearned = this.learnedVerses.filter(v => this.checkIfVerseEquals(v, verse))[0];
    const previouslyNeedToLearn = this.learnedVerses.filter(v => this.checkIfVerseEquals(v, verse))[0];
    if(learned && !previouslyLearned){
      this.learnedVerses.push(verse);
      if(previouslyNeedToLearn){
        this.needToLearnVerses = this.needToLearnVerses.filter(v => !this.checkIfVerseEquals(v, verse));
      }
    } else if(!previouslyNeedToLearn) {
      this.needToLearnVerses.push(verse);
      if(previouslyLearned){
        this.learnedVerses = this.learnedVerses.filter(v => !this.checkIfVerseEquals(v, verse));
      }
    }
  }

  checkIfVerseEquals(verse:BibleWord, currentVerse:BibleWord):boolean{
    return currentVerse.book === verse.book && currentVerse.chapter === verse.chapter && currentVerse.verse === verse.verse;
  }

}