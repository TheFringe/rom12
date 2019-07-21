import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  showBack = false;
  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    this.showBack = !this.showBack;
  }
}