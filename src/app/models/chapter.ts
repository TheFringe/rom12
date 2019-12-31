import { Verse } from './verse';

export class Chapter {
  private verses: Verse[] = [];
  constructor(public num: number) {}

  getVerse(num: number): Verse {
    return this.verses.filter(v => v.verseNo === num)[0];
  }

  withVerse(verseNo: number, text: string): Chapter {
    this.verses.push({ verseNo, text });
    return this;
  }
}
