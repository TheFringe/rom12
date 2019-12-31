import { Injectable } from '@angular/core';
import { BibleWord } from '../models/bible-word';
import { Book } from '../models/book';
import { Chapter } from '../models/chapter';
import { Verse } from '../models/verse';

@Injectable()
export class BibleService {
  romansBook: Book;
  constructor() {
    this.romansBook = new Book('Romarbrevet', 'Rom', [
      new Chapter(12)
        .withVerse(
          1,
          'Därför ber jag er, bröder, vid Guds barmhärtighet att frambära er själva som ett levande och heligt offer som behagar Gud. Det skall vara er andliga gudstjänst.'
        )
        .withVerse(
          2,
          'Anpassa er inte efter denna världen, utan låt er förvandlas genom förnyelsen av era tankar, så att ni kan avgöra vad som är Guds vilja: det som är gott, behagar honom och är fullkomligt.'
        )
        .withVerse(
          3,
          'I kraft av den nåd jag har fått säger jag till var och en av er: ha inte för höga tankar om er själva utan tänk som man bör tänka, med självbesinning, så att var och en rättar sig efter det mått av tro som Gud har tilldelat honom.'
        )
        .withVerse(
          4,
          'Ty liksom vi har en enda kropp men många lemmar, alla med olika uppgifter,'
        )
        .withVerse(
          5,
          'så utgör vi, fast många, en enda kropp i Kristus, men var för sig är vi lemmar som är till för varandra.'
        )
        .withVerse(
          6,
          'Vi har olika gåvor allt efter den nåd vi har fått: profetisk gåva i förhållande till vår tro,'
        )
        .withVerse(
          7,
          'tjänandets gåva hos den som tjänar, undervisningens gåva hos den som undervisar,'
        )
        .withVerse(
          8,
          'tröstens gåva hos den som tröstar och förmanar, gåvan att frikostigt dela med sig, att vara nitisk som ledare och att med glatt hjärta visa barmhärtighet.'
        )
        .withVerse(
          9,
          'Er kärlek skall vara uppriktig. Avsky det onda, håll fast vid det goda.'
        )
        .withVerse(
          10,
          'Visa varandra tillgivenhet och broderlig kärlek, överträffa varandra i ömsesidig aktning.'
        )
        .withVerse(
          11,
          'Slappna inte i er iver, håll er brinnande i anden. Tjäna Herren.'
        )
        .withVerse(
          12,
          'Gläd er i hoppet, var uthålliga i lidandet och ihärdiga i bönen.'
        )
        .withVerse(
          13,
          'Hjälp Guds heliga med vad de behöver, vinnlägg er om gästfrihet.'
        )
        .withVerse(
          14,
          'Välsigna dem som förföljer er, välsigna dem och förbanna dem inte.'
        )
        .withVerse(
          15,
          'Gläd er med dem som gläder sig och gråt med dem som gråter.'
        )
        .withVerse(
          16,
          'Bemöt alla lika och håll er inte för goda att umgås med dem som är ringa. Var inte självkloka.'
        )
        .withVerse(
          17,
          'Löna inte ont med ont. Tänk på vad som är riktigt för alla människor.'
        )
        .withVerse(
          18,
          'Håll fred med alla människor så långt det är möjligt och kommer an på er.'
        )
        .withVerse(
          19,
          'Ta inte rätten i egna händer, mina kära, utan låt Guds vrede ha sin gång, ty det står skrivet: Min är hämnden, jag skall utkräva den, säger Herren.'
        )
        .withVerse(
          20,
          'Men är din fiende hungrig, ge honom att äta; är han törstig, ge honom att dricka. Då samlar du glödande kol på hans huvud.'
        )
        .withVerse(
          21,
          'Låt dig inte besegras av det onda, utan besegra det onda med det goda.'
        )
    ]);
  }

  public get(verseNo: number): BibleWord {
    const romVerse = this.romansBook.getVerse('Rom', 12, verseNo);

    return {
      book: 'Romarbrevet',
      chapter: 12,
      shortBook: 'Rom',
      text: romVerse.text,
      verse: romVerse.verseNo
    };
  }
}
