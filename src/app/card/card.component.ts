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

  constructor(private bibleService: BibleService) { }

  currentBibleWord: BibleWord;

  ngOnInit() {
    this.updateCurrentBibleWord();
  }

  flipCard() {
    this.showBack = !this.showBack;
  }

  up() {
    console.log("up");
    this.train = false;
    this.learned = true;
    this.updateCurrentBibleWord();
  }

  down() {
    console.log("down");
    this.train = true;
    this.learned = false;
  }

  updateCurrentBibleWord() {
    this.verseNumber = this.verseNumber + 1;
    this.currentBibleWord = this.bibleService.get(this.verseNumber);
  }

  get passage(): string {
    const bible = this.currentBibleWord;
    return `${bible.book} ${bible.chapter}:${bible.verse}`;
  }
}