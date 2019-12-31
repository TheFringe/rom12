import { Chapter } from './chapter';
import { Verse } from './verse';

export class Book {
  constructor(
    public name: string,
    public shortName: string,
    public chapters: Chapter[]
  ) {}

  // get(rom,12,1)
  getVerse(book: string, chapter: number, verse: number): Verse {
    if (
      book &&
      (book.toLowerCase() === this.name.toLowerCase() ||
        book.toLowerCase() === this.shortName.toLowerCase())
    ) {
      return this.chapters.filter(ch => ch.num === chapter)[0].getVerse(verse);
    }
    throw new Error(
      `Invalid arguments: book: ${book}, chapter: ${chapter} , verse: ${verse}`
    );
  }
}
