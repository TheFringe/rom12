export class BibleWord {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  shortBook: string;

  constructor(book = '', chapter = 0, verse = 0, text = '', shortBook = '') {
    this.book = book;
    this.chapter = chapter;
    this.verse = verse;
    this.text = text;
    this.shortBook = shortBook;
  }
}
