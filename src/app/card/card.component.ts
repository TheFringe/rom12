import { Component, OnInit } from '@angular/core';

import { BibleService } from '../services/bible.service';
import { ProgressService } from '../services/progress.service';
import { BibleWord } from '../models/bible-word';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  train = false;
  learned = false;
  showBack = false;
  private verseNumber = 0;

  constructor(private bibleService: BibleService, private progressService:ProgressService) { }

  currentBibleWord: BibleWord;

  ngOnInit() {
    this.updateCurrentBibleWord();
  }

  flipCard() {
    this.showBack = !this.showBack;
  }

  up() {
    console.log("up");
    this.trackProgress(true);
  }

  down() {
    console.log("down");
    this.trackProgress(false);
  }

  trackProgress(learned:boolean){
    this.progressService.addProgress(this.currentBibleWord, learned);
    this.updateCurrentBibleWord();
    this.flipCard();
  }

  updateCurrentBibleWord() {
    this.verseNumber = this.verseNumber === 3 ? 1 : this.verseNumber + 1;
    this.currentBibleWord = this.bibleService.get(this.verseNumber);
    this.updateLearnedStatus();
  }

  updateLearnedStatus(){
    this.learned = this.progressService.checkIfLearned(this.currentBibleWord);
    this.train = this.progressService.checkIfNeedToLearn(this.currentBibleWord);
    console.log('Train: ' + this.train);
    console.log('Learned: ' + this.learned);

  }

  get passage(): string {
    const bible = this.currentBibleWord;
    return `${bible.book} ${bible.chapter}:${bible.verse}`;
  }
}