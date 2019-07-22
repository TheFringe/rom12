import { Component, OnInit } from '@angular/core';

import { BibleService } from '../services/bible.service';
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
  constructor(private bibleService: BibleService) { }

  currentBibleWord: BibleWord;

  ngOnInit() {
    this.currentBibleWord = this.bibleService.get(0);
  }

  flipCard() {
    this.showBack = !this.showBack;
  }

  up() {
    console.log("up");
    this.train = false;
    this.learned = true;
  }

  down() {
    console.log("down");
    this.train = true;
    this.learned = false;
  }

  get passage(): string {
    const bible = this.currentBibleWord;
    return `${bible.book} ${bible.chapter}:${bible.verse}`;
  }
}