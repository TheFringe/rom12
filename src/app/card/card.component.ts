import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  train = false;
  learned = false;
  showBack = false;
  constructor() { }

  ngOnInit() {
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
}