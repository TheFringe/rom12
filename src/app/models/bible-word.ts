export class BibleWord {
  book: string;
  chapter: number;
  verse: number;
  text: string;

  constructor(book = '', cahpter = 0, verse = 0, text = '') {
    this.book = book;
    this.chapter = cahpter;
    this.verse = verse;
    this.text = text;
  }
}